import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Investment } from '../../types';

interface InvestmentState {
  currentInvestment: Investment | null;
  loading: boolean;
  error: string | null;
}

const initialState: InvestmentState = {
  currentInvestment: {
    id: 'sorbiforce2024',
    title: 'SorbiForce 2024',
    description: 'Revolutionary carbon capture technology for a sustainable future',
    raised: 2500000,
    target: 5000000,
    investors: 1234,
    daysLeft: 15,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  },
  loading: false,
  error: null,
};

const investmentSlice = createSlice({
  name: 'investment',
  initialState,
  reducers: {
    setInvestment: (state, action: PayloadAction<Investment>) => {
      state.currentInvestment = action.payload;
    },
  },
});

export const { setInvestment } = investmentSlice.actions;
export default investmentSlice.reducer;