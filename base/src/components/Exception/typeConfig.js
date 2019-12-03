const requireContext = require.context("@/static/images",true, /^\.\/.*\.svg$/);
const projectImgs = requireContext.keys().map(requireContext);

function getImagePathByType(type) {
  return projectImgs.find(el => el.search(type) !== -1)
}

const config = {
  403: {
    img: getImagePathByType(403),
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: getImagePathByType(404),
    title: '404',
    desc: '抱歉，你访问的页面不存在',
  },
  500: {
    img: '@/static/images/500.svg',
    title: '500',
    desc: '抱歉，服务器出错了',
  },
};

export default config;
