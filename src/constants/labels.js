//GENERAL titles
export const FIND_OUT_MORE = "Tìm hiểu thêm";

export const NAV_LABELS = {
  //Về công ty
  ABOUT_COMPANY: {
    label: "VỀ CÔNG TY",
    options: [
      { id: "A1", label: "Giới thiệu chung", path: "/ve-cong-ty/gioi-thieu-chung" },
      { id: "A2", label: "Hệ thống quản trị", path: "/ve-cong-ty/he-thong-quan-tri" },
    ]
  },

  //Chi nhánh
  BRANCHES: {
    label: "CHI NHÁNH",
    options: [
      { id: "B1", label: "Trung Tâm Thương Mại Dịch Vụ Đại Quang Minh", path: "/chi-nhanh/tttmdv-dai-quang-minh" },
      { id: "B2", label: "Trung Tâm Thời Trang Vàng Bạc Đá Quý Bến Thành", path: "/chi-nhanh/ttttvbdq-bt" },
    ]
  },

  //Lĩnh vực hoạt động
  BUSINESS_AREAS: {
    label: "LĨNH VỰC HOẠT ĐỘNG",
    options: [
      { id: "C1", label: "Đầu tư", path: "/linh-vuc-hoat-dong/dau-tu" },
      { id: "C2", label: "Thương mại", path: "/linh-vuc-hoat-dong/thuong-mai" },
      { id: "C3", label: "Dịch vụ", path: "/linh-vuc-hoat-dong/dich-vu" }
    ]
  },

  //Tin tức
  NEWS: {
    label: "TIN TỨC",
    options: [
      { id: "D1", label: "Tin tức chung", path: "/tin-tuc/tin-tuc-chung" },
      { id: "D2", label: "Giá thị trường", path: "/tin-tuc/gia-thi-truong" },
      { id: "D3", label: "Phỏng vấn", path: "/tin-tuc/phong-van" },
      { id: "D4", label: "Cổ đông", path: "/tin-tuc/co-dong" },
      { id: "D5", label: "Giá vàng hôm nay", path: "/tin-tuc/gia-vang-hom-nay" }
    ]
  },
}

//BUTTON LABEL: LessMoreButton
export const MORE_LESS_BUTTON = {
  More: "Xem thêm",
  Less: "Ẩn bớt"
}

//Banner 
export const BannerHeader = "ĐỐI TÁC THƯƠNG MẠI";
export const BannerDescription = "Doanh nghiệp có hơn 20 năm kinh nghiệm đầu tư & hợp tác kinh doanh-thương mại hiệu quả & ổn định.";
export const BannerButton_Contact = "Liên hệ ngay";
export const BannerButton_Hightlight = "Các công trình tiêu biểu";

// Export danh sách chính cho navbar
export const MAIN_NAV_ITEMS = [
  NAV_LABELS.ABOUT_COMPANY,
  NAV_LABELS.BRANCHES,
  NAV_LABELS.BUSINESS_AREAS,
  NAV_LABELS.NEWS
];

//SLIDER YOUTUBE
export const WATCH1="https://www.youtube.com/watch?v=I3f8LjZSy30"

//SERVICE INFO
export const SERVICE_INFO = {
  title : "Dịch Vụ Của Satraseco",
  description : "SATRASECO là doanh nghiệp hoạt động trong lĩnh vực thương mại và bất động sản tại TP.HCM, chuyên cung cấp dịch vụ cho thuê văn phòng – mặt bằng, kinh doanh nguyên phụ liệu ngành dệt may, và đầu tư phát triển quỹ đất. Với định hướng bền vững và uy tín lâu năm, SATRASECO luôn đồng hành cùng doanh nghiệp trong việc tối ưu không gian và kết nối giá trị thương mại hiệu quả.",
}

export const SERVICE_INFO_LIST = [
  {
    id: "1",
    title: "Cho thuê văn phòng và mặt bằng kinh doanh",
    description: "Cho thuê văn phòng tại các tòa nhà trung tâm TP.HCM Cho thuê kios, mặt bằng tầng trệt, nhà phố thương mại Dịch vụ quản lý, bảo trì và hỗ trợ khách thuê",
    img : "https://cms.satraseco.com.vn/uploads/villa_house_model_key_drawing_retro_desktop_real_estate_sale_concept_1c9d8698a2.jpg",
  },

  {
    id: "2",
    title: "Đầu tư và phát triển bất động sản",
    description: "Quản lý và phát triển quỹ đất Hợp tác đầu tư, chuyển nhượng dự án Cải tạo – xây dựng mới các dự án văn phòng, thương mại",
    img : "https://cms.satraseco.com.vn/uploads/Adobe_Stock_746959182_da879f8f6f.jpeg",
  },

  {
    id: "3",
    title: "Kinh doanh nguyên phụ liệu ngành dệt may",
    description: "Phân phối sợi, vải, chỉ và các nguyên liệu phục vụ sản xuất may mặc Cung cấp cho nhà máy, xưởng sản xuất và các đại lý trong ngành",
    img : "https://cms.satraseco.com.vn/uploads/vecteezy_real_estate_agent_holding_house_key_to_his_client_after_8572449_75fd1fb050.jpg"
  }
]

//HIGHLIGHT PROJECT
export const HIGHLIGHT_PROJECT = {
  title: "Những Dự Án Tiêu Biểu Của Satraseco",
  description: "Với hơn 40 năm kinh nghiệm, Satraseco tự hào sở hữu và quản lý nhiều dự án nổi bật trong lĩnh vực dịch vụ, thương mại và đầu tư bất động sản tại TP.HCM",
}

export const HIGHLIGHT_PROJECT_LIST = [
  {
    id : "1",
    title : "Tòa nhà Viet Dragon Tower",
    address : "141 Nguyễn Du, Quận 1",
    info : ["Quy mô: 1 trệt, 1 lửng, 1 hầm, 12 lầu", 
      "Diện tích đất: 715 m²", 
      "Tổng diện tích xây dựng: 6.025 m²"],
    img : "https://cms.satraseco.com.vn/uploads/IMG_2679_d7d8bfea7c.webp",
  },

  {
    id: "2",
    title: "Khách sạn 44–46 Phan Bội Châu",
    address: "44-46 Phan Bội Châu, Quận 1",
    info: ["Quy mô: 8 tầng, 1 tầng hầm", 
      "Diện tích đất: 197 m²", 
      "Tổng diện tích xây dựng: 1.579 m²"],
    img : "https://cms.satraseco.com.vn/uploads/IMG_2677_f8dcd7e565.jpeg",
  },

  {
    id: "3",
    title: "Căn hộ cao cấp The Grand Manhattan",
    address: "100 Nguyễn Thái Bình, Quận 1",
    info: ["Quy mô: 2 tầng hầm, 35 tầng", 
      "Diện tích đất: 1.500 m²", 
      "Tổng diện tích xây dựng: 45.000 m²"],
    img : "https://cms.satraseco.com.vn/uploads/IMG_2733_f0e73420aa.jpeg",
  },
]

//HISTORY
export const HISTORY = {
  title : "Hành trình phát triển",
  description : "Một hành trình hơn hai thập kỷ chuyển mình và bền bỉ kiến tạo giá trị thực."
}

export const HISTORY_LIST = [
  {
    id : "1", 
    title : "2025",
    description : ["Chính thức cổ phần hóa – thành lập Công ty Cổ phần Thương mại và Dịch vụ SATRASECO",
                   "Bước ngoặt quan trọng, chuyển sang hoạt động theo mô hình doanh nghiệp cổ phần.",
                   "Mở rộng lĩnh vực hoạt động sang dịch vụ thương mại, cho thuê văn phòng và đầu tư bất động sản."]
  },

  {
    id : "2",
    title : "2024 - 2025",
    description : ["Tiền thân là Công ty Vải Sợi May Gia Định",
                  "Là doanh nghiệp nhà nước hoạt động trong lĩnh vực dệt may và thương mại nguyên phụ liệu may mặc.",
                  "Nắm giữ các quỹ đất, mặt bằng và hệ thống kho bãi tại TP.HCM"]
  },

  {
    id : "3", 
    title : "2016 - 2023",
    description : ["Chính thức cổ phần hóa – thành lập Công ty Cổ phần Thương mại và Dịch vụ SATRASECO",
                   "Bước ngoặt quan trọng, chuyển sang hoạt động theo mô hình doanh nghiệp cổ phần.",
                   "Mở rộng lĩnh vực hoạt động sang dịch vụ thương mại, cho thuê văn phòng và đầu tư bất động sản."]
  },

  {
    id : "4",
    title : "2005 - 2015",
    description : ["Tiền thân là Công ty Vải Sợi May Gia Định",
                  "Là doanh nghiệp nhà nước hoạt động trong lĩnh vực dệt may và thương mại nguyên phụ liệu may mặc.",
                  "Nắm giữ các quỹ đất, mặt bằng và hệ thống kho bãi tại TP.HCM"]
  },

  {
    id : "5", 
    title : "2004",
    description : ["Chính thức cổ phần hóa – thành lập Công ty Cổ phần Thương mại và Dịch vụ SATRASECO",
                   "Bước ngoặt quan trọng, chuyển sang hoạt động theo mô hình doanh nghiệp cổ phần.",
                   "Mở rộng lĩnh vực hoạt động sang dịch vụ thương mại, cho thuê văn phòng và đầu tư bất động sản."]
  },

  {
    id : "6",
    title : "Trước 2004",
    description : ["Tiền thân là Công ty Vải Sợi May Gia Định",
                  "Là doanh nghiệp nhà nước hoạt động trong lĩnh vực dệt may và thương mại nguyên phụ liệu may mặc.",
                  "Nắm giữ các quỹ đất, mặt bằng và hệ thống kho bãi tại TP.HCM"]
  },
]

//HIGHLIGHT NUMERIC
export const HIGHLIGHT_NUMERIC = {
  title : "Những Con Số Ấn Tượng Về Satraseco",
  description : "SATRASECO từng bước khẳng định vị thế qua những con số ấn tượng trong lĩnh vực thương mại và bất động sản tại TP.HCM."
}

export const HIGHLIGHT_NUMERIC_LIST = [
  {
    id : "1",
    header : "20+",
    title : "Năm kinh nghiệm",
    description : "trong lĩnh vực thương mại và đầu tư bất động sản",
  },

  {
    id : "2",
    header : "6",
    title : "Dự án bất động sản lớn",
    description : "tiêu biểu tại trung tâm TP.HCM đã và đang triển khai",
  },

  {
    id : "3",
    header : "100+",
    title : "Mặt bằng ",
    description : "được quản lý, vận hành bởi đội ngũ nội bộ chuyên nghiệp",
  },
]

//NEWS
export const NEWS = {
  title : "Tin Tức Mới Nhất",
  description : "Cập nhật những thông tin và sự kiện mới nhất về hoạt động của Satraseco",
} 

export const NEWS_LIST = [
  {
    id : "1",
    title: "Đại hội đồng cổ đông thường niên năm 2024",
    description : "Đại hội đồng cổ đông thường niên năm 2023",
    date : "Đăng ngày 25/04/2025",
    img : "https://cms.satraseco.com.vn/uploads/small_DH_02_2048x1151_ae44013247.jpg",
  },

  {
    id : "2",
    title: "Giới thiệu satraseco",
    description : "CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ SÀI GÒN",
    date : "Đăng ngày 25/04/2025",
    img : "https://cms.satraseco.com.vn/uploads/small_31279f5a_6d88_4dc7_b6a2_651416e8dc15_a6d8dd337d.webp",
  },

  {
    id : "",
    title: "Đại hội đồng cổ đông thường niên năm 2024",
    description : "Đại hội đồng cổ đông thường niên năm 2023",
    date : "Đăng ngày 25/04/2025",
    img : "https://cms.satraseco.com.vn/uploads/small_DH_02_2048x1151_ae44013247.jpg",
  },

  {
    id : "https://cms.satraseco.com.vn/uploads/small_DH_02_2048x1151_ae44013247.jpg",
    title: "Giới thiệu satraseco",
    description : "CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ SÀI GÒN",
    date : "Đăng ngày 25/04/2025",
    img : "https://cms.satraseco.com.vn/uploads/small_31279f5a_6d88_4dc7_b6a2_651416e8dc15_a6d8dd337d.webp",
  },

  {
    id : "4",
    title: "Tài liệu họp ĐHĐCĐ năm 2025",
    description : "Tài liệu họp ĐHĐCĐ năm 2025",
    date : "Đăng ngày 24/04/2025",
    img : "https://cms.satraseco.com.vn/uploads/small_DH_02_2048x1151_ae44013247.jpg",
  },
]

//ABOUT: reuse label nav

//FOOTER
export const FOOTER_INFO = {
  address : "36 Lưu Văn Lang, Phường Bến Thành, Quận 1, Tp. HCM",
  phone : "(84-8)3829 4445",
  email : "info@satraseco.com.vn",
}

// Helper function để lấy options theo key
export const getOptionsByKey = (key) => {
  return NAV_LABELS[key]?.options || [];
};

// Helper function để lấy label theo key
export const getLabelByKey = (key) => {
  return NAV_LABELS[key]?.label || "";
};
