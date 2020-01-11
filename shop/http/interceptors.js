

/**
 * @param {Object} ajax 
 */
export default (ajax) => {
    ajax.interceptors.request.use(request => {
        start()
        return request
    }, error => {
        return Promise.reject(error)
    })
    // 400 （错误请求） 服务器不理解请求的语法。
    // 401 （未授权） 请求要求身份验证。 
    // 403 （禁止） 服务器拒绝请求。
    ajax.interceptors.response.use(response => {
        end()
        return response
    }, error => {
        end()
        return Promise.reject(error)
    })

}

function start() {

}

function end() {
}