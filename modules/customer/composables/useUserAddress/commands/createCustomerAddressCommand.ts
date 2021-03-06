import { UseContextReturn } from '~/types/core';
import { CustomerAddressInput } from '~/modules/GraphQL/types';

export const createCustomerAddressCommand = {
  execute: async (context: UseContextReturn, params: CustomerAddressInput) => {
    const { data } = await context.app.$vsf.$magento.api.createCustomerAddress(params);

    return data?.createCustomerAddress ?? {};
  },
};
