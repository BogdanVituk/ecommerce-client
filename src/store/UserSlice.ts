import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRegisterResponce, IUserinfo} from "../types/user";
import { RegisterModalinputs, LoginModalFormInputs } from "../types/inputs";
import { instance, authInstance } from '../axios';

export const registerUser = createAsyncThunk<IRegisterResponce, RegisterModalinputs>(
    'fetch/registerUser',
    async (body, thunkApi)  => {
        try {
            const {data} = await instance.post('/users', body)
            return data;
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(error) 
        }
    }
)

export const loginUser = createAsyncThunk<IRegisterResponce, LoginModalFormInputs>(
    'fetch/loginUser',
    async (body, thunkApi) => {
        try {
            const login = await instance.post('/auth/login', body)

            localStorage.setItem('token', login.data.access_token);
        
            const { data } = await instance.get('/auth/profile', {
                headers: {
                    Authorization: `Bearer ${login.data.access_token}`
                }
            })

        return data;
        } catch (error) {
            
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const check = createAsyncThunk<any, void>(
    'fetch/check',
    async (_, thunkApi) => {
        try {  
            const {data} = await authInstance.get('/auth/profile')

            console.log(data)

            return data;

        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(error)
        }

    }
)

const isLoading = (state: IUserinfo) => {
    state.loading = true
}

const initialState: IUserinfo = {
    user: {},
    isAuth: false,
    loading: false,
    basket: []
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        toggleIsAuth(state, action: PayloadAction<void>) {
            state.isAuth = !state.isAuth
        },
        addItemBasket(state, action) {
            const newItem = []
            const found = state.basket.filter(item => item.id == action.payload.id);

        }
    },
    extraReducers(builder) {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, action: PayloadAction<IRegisterResponce>) => {
            state.loading = false
            state.isAuth = true;
            state.user = action.payload
            console.log(state.user)
        })
        .addCase(registerUser.rejected, (state) => {
            state.loading = false
        })
        
        .addCase(check.pending, isLoading)
        .addCase(check.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.isAuth = true;
            state.user = payload;
        })
        .addCase(check.rejected, (state) => {
            state.loading = false;
        })

        .addCase(loginUser.pending, (state) => {
            state.loading = true;
        }) 
        .addCase(loginUser.fulfilled, (state, action: PayloadAction<IRegisterResponce>) => {
            state.loading = false
            state.isAuth = true;
            state.user = action.payload

        }) 
        .addCase(loginUser.rejected, (state) => {
            state.loading = false
        }) 

    },
})

export const { toggleIsAuth } = UserSlice.actions;
export default UserSlice.reducer;