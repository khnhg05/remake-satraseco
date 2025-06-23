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

// Helper function để lấy options theo key
export const getOptionsByKey = (key) => {
  return NAV_LABELS[key]?.options || [];
};

// Helper function để lấy label theo key
export const getLabelByKey = (key) => {
  return NAV_LABELS[key]?.label || "";
};
