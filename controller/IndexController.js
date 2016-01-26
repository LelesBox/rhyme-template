/**
 * Created by blake on 1/26/16.
 */
module.exports = {
    index: function*() {
        yield this.render('content', {
            users: "hello world"
        });
    }
}