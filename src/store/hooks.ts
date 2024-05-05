import { TypedUseSelectorHook, useDispatch,useSelector} from 'react-redux';
import { JobDispatch, RootState } from './store';

export const useJobDispatch=()=>useDispatch<JobDispatch>();
export const useJobSelector:TypedUseSelectorHook<RootState>=useSelector;