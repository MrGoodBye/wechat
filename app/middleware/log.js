/**
 * Created by Tu on 2018/2/20.
 */
/**
 * Created by Tu on 2018/2/20.
 */
module.exports = options => {
    return async function gzip(ctx, next) {
        console.log('start time -->', new Date())
        await next()
        console.log('end time -->', new Date())
    }
}