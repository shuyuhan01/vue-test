import instance from './axios'//引入axios文件

// 获取宣传
export function customerCase(data) {
  return instance.post('api/media/site/customerCase',data)
}

// 获取视频
export function teamVideos() {
  return instance.get('api/media/site/teamVideos')
}

// 获取新闻
export function coverage(data) {
  return instance.post('api/coverage/site/page',data)
}

// 获取省
export function province() {
  return instance.get('api/area/site/level?level=1')
}

// 获取市区
export function cityArea(id) {
  return instance.get("api/area/site/byParent?parentId=" + id)
}

// 提交表单
export function commit(data) {
  return instance.post('api/partner/register/site/commit', data)
}