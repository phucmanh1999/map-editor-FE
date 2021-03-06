export const reverseCoor = (coor) => {
  let res = [];
  coor.forEach((item) => {
    let a = [item[1], item[0]];
    res.push(a);
  });
  return res;
};

export const reverseCoorMultiPolygon = (coor) => {
  let res = [];
  coor.forEach((item) => {
    let a = reverseCoor(item[0]);
    res.push(a);
  });
  return res;
};

export const toSlug = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "_");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
}

export const calGeomCenter = coor => {
  let x=[], y=[]
  const flatCoor = coor.flat(4)
  for (let i=0;i<flatCoor.length;i+=2){
    x.push(flatCoor[i])
    y.push(flatCoor[i+1])
  }
  let meanX = x.reduce((total, num) => total = total + num) / x.length
  let meanY = y.reduce((total, num) => total = total + num) / y.length
  return [meanX, meanY]
}
