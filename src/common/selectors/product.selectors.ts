import { Reducers } from '../../types';

import { createSelector } from 'reselect';

export const commonSelector = (state: Reducers) => state.common;

export const productSelector = createSelector(commonSelector, (common) => common.products);
