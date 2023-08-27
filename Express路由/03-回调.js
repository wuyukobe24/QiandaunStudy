function test(astr, callback){
    const str = '传递的参数：' + astr
    callback(str)
}
function print(str) {
    console.log(str);
}

// test('name', print)

class Resolve {
    name = 'app'
    say(str) {
        console.log('say:', str);
    }
    static listen(str) {
        console.log('listen:',str);
    }
}
let re = new Resolve
re.say('hello')
Resolve.listen('song')

