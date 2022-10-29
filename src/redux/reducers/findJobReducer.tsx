import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appdispatch } from "../configStore";
import { getStoreJson, http, setStoreJson } from "../../util/setting";

export interface LoaiCongViec {
  id: number;
  congViec: CongViec;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViec {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}
// -- Chính ---
export interface MenuLoaiCongViec {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}

export interface DsNhomChiTietLoai {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: DsChiTietLoai[];
}

export interface DsChiTietLoai {
  id: number;
  tenChiTiet: string;
}

export interface Comment {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}

const initialState: any = {
  arrJob: getStoreJson("JOB"),
  menuTypeJob: [],
  congViecChiTiet: getStoreJson("congViecChiTiet"),
  arrComment: getStoreJson('arrComment'),
};

const findJobReducer = createSlice({
  name: "findJobReducer",
  initialState,
  reducers: {
    getJobAction: (state, action: PayloadAction<LoaiCongViec[]>) => {
      state.arrJob = action.payload;
      setStoreJson("JOB", state.arrJob);
    },
    getMenuTypeJob: (state, action: PayloadAction<MenuLoaiCongViec[]>) => {
      state.menuTypeJob = action.payload;
    },
    layCongViecChiTietAction: (state, action: PayloadAction<CongViec>) => {
      state.congViecChiTiet = action.payload;
      setStoreJson("congViecChiTiet", state.congViecChiTiet);
    },
    layBinhLuanTheoCongViecAction: (
      state,
      action: PayloadAction<Comment[]>
    ) => {
        state.arrComment = action.payload
        setStoreJson('arrComment',state.arrComment)
    },
  },
});

export const { getJobAction, getMenuTypeJob, layCongViecChiTietAction,layBinhLuanTheoCongViecAction } =
  findJobReducer.actions;

export default findJobReducer.reducer;

export const getJobApi = (tenCongViec: string) => {
  return async (dispatch: Appdispatch) => {
    try {
      const result = await http.get(
        `cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`
      );
      let GetJobResult: LoaiCongViec[] = result.data.content;
      dispatch(getJobAction(GetJobResult));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMenuTypeJobApi = () => {
  return async (dispatch: Appdispatch) => {
    try {
      const result = await http.get("cong-viec/lay-menu-loai-cong-viec");
      dispatch(getMenuTypeJob(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const layCongViecChiTietApi = (id: number) => {
  return async (dispatch: Appdispatch) => {
    try {
      const result = await http.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
      dispatch(layCongViecChiTietAction(result.data.content[0]));
    } catch (error) {
      console.log(error);
    }
  };
};
export const layBinhLuanTheoCongViecApi = (id: number) => {
  return async (dispatch: Appdispatch) => {
    try {
      const result = await http.get(
        `binh-luan/lay-binh-luan-theo-cong-viec/${id}`
      );
      dispatch(layBinhLuanTheoCongViecAction(result.data.content))
    } catch (error) {
      console.log(error);
    }
  };
};
