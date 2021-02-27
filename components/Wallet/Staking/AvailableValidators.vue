<template>
  <v-card elevation="0">
    <v-card-title>
      <v-toolbar v-if="$vuetify.breakpoint.mdAndUp" flat color="transparent">
        <v-toolbar-title>All Validators</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="query"
          label="Search"
          autocomplete="off"
          data-vv-name="recipient"
          clearable
          solo
          dense
          hide-details
          append-icon="mdi-magnify"
        />
        <v-btn-toggle v-model="queryType" class="ml-2" mandatory>
          <v-btn text outlined height="38" class="text-uppercase" value="all">
            All
          </v-btn>
          <v-btn
            text
            outlined
            height="38"
            color="green"
            class="text-uppercase"
            value="active"
          >
            Active
          </v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-flex v-else flat color="transparent">
        <v-row no-gutters>
          <v-col>
            <v-toolbar-title>All Validators</v-toolbar-title>
          </v-col>
          <v-col align="end">
            <v-btn-toggle v-model="queryType" mandatory>
              <v-btn text outlined height="38" class="text-uppercase" value="all">
                All
              </v-btn>
              <v-btn
                text
                outlined
                height="38"
                color="green"
                class="text-uppercase"
                value="active"
              >
                Active
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-text-field
              v-model="query"
              label="Search"
              class="my-2"
              autocomplete="off"
              clearable
              solo
              dense
              hide-details
              append-icon="mdi-magnify"
            />
          </v-col>
        </v-row>
      </v-flex>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="filterValidators(validators, query, queryType)"
      :loading="loading"
      class="px-5"
    >
      <v-progress-linear
        v-slot:progress
        color="blue"
        indeterminate
      ></v-progress-linear>

      <template v-slot:item="{ item }">
        <tr @click.stop="onSelectRow(item)">
          <td class="d-sm-table-cell">
            <!-- Name cell -->
            <v-flex class="d-flex flex-row align-center">
              <validator-avatar
                :identity="item.tokens"
                :valoper="item.operator_address"
                size="26px"
              />
              <dot-status-with-tooltip
                :status="item.status === 2"
                :msg="item.status === 2 ? 'Active' : 'Inactive'"
                class="mx-2"
              />
              <span class="caption-1">
                {{ item.description.moniker }}
              </span>
            </v-flex>
          </td>
          <td class="d-flex align-items-center text-right justify-content-end" :class="$vuetify.breakpoint.mdAndUp ? 'flex-row' : 'flex-column'">
            <!-- Tokens cell -->
            <amount
              :style="$vuetify.breakpoint.mdAndUp ? 'font-size: 1.4em': 'font-size: 1em'"
              class="my-auto"
              :micro-amount="item.tokens"
              :noDecimals="true"
              :denom="denom"
            />
            <span class="ml-1">
              ({{ item.voting_power_percent }}) %
            </span>
          </td>
          <!-- Commission cell -->
          <td 
            :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'justify-content-end'"
            class="d-flex d-sm-table-cell align-items-center"
          >
            <warning-commission-icon
              v-if="
                item.details !== null &&
                  item.commission.commission_rates.rate > 0.5
              "
            />
            <span class="mr-5">
              {{
                item.details !== null
                  ? item.commission.commission_rates.rate * 100
                  : 0
              }}%
            </span>
          </td>
        </tr>
      </template>
    </v-data-table>
    <dialog-validator
      v-if="showModal"
      :value="selected"
      v-on:cancel="onClose"
    />
  </v-card>
</template>

<script>
import ValidatorAvatar from "@/components/Wallet/Common/AvatarToken.vue";
import Amount from "@/components/Wallet/Common/Amount.vue";
import DotStatusWithTooltip from "@/components/Wallet/Common/DotStatusWithTooltip.vue";
import WarningCommissionIcon from "@/components/Wallet/Common/WarningCommissionIcon.vue";

export default {
  components: {
    ValidatorAvatar,
    Amount,
    DotStatusWithTooltip,
    WarningCommissionIcon
  },

  // TODO: replace placeholders
  data() {
    return {
      loading: false,
      showModal: false,
      query: null,
      queryType: "all",
      selected: null,
      headers: [
        { text: "Name", value: "description" },
        { text: "Tokens", value: "tokens", align: "right" },
        { text: "Commission", value: "commission", align: "right" }
      ]
    };
  },

  computed: {
    denom() {
      return this.$store.getters["app/micro_stake_denom"];
    },
    decimals() {
      return this.$store.getters["app/decimals"];
    },
    validators() {
      return this.$store.getters[`staking/validators`];
    }
  },

  methods: {
    filterValidators(items, query, type) {
      if (items === null) {
        return [];
      }

      let results = items;
      if (query !== null) {
        results = results.filter(x =>
          x.description.moniker.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (type === "active") {
        results = results.filter(x => x.status === 2);
      }

      return results;
    },
    onClose() {
      this.showModal = false;
      this.selected = null;
    },
    onSelectRow(row) {
      this.selected = row;
      this.showModal = true;
    }
  }
};
</script>

<style>
.theme--light.v-data-table tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.theme--dark.v-data-table tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.1);
}
.align-items-center {
  align-items: center;
}
.justify-content-end {
  justify-content: flex-end;
}
</style>
