<template>
  <div>
    <table class="min-w-max w-full table-auto">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th v-for="field in fields" :key="field">
            {{ field }}
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          v-for="client in clients"
          :key="client"
          class="border-b border-gray-200 hover:bg-gray-100"
        >
          <td v-for="field in fields" :key="field">
            {{ client[field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    clients: {
      type: Array,
      default: () => [{
        name: 'Miss Emily Batz',
        email: 'Lilly.Frami50@hotmail.com',
        phone: '338.374.2482 x588',
        document: '6771-8903-8335-9233',
        default_source: 85627,
        delinquent: false,
        address_line_1: '29066 Evalyn Parks',
        address_line_2: 'Apt. 616',
        address_city: 'Texas City',
        address_state: 'Pennsylvania',
        address_zip_code: '59845-4379',
        address_country: 'Algeria',
        invoice_prefix: 'TmyutH@C*1',
        invoice_sequence: 39799,
        discount: 56530,
        id: '1'
      }]
    }
  },
  computed: {
    fields () {
      const field = []
      for (const [key] of Object.entries(this.clients[0])) {
        field.push(key)
      }
      return field
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
