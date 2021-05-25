const path = require('path'); // import는 그냥 가져오는거고, requires는 무조건 값을 가져와야 한다. 리턴값 없으면 에러없이 그냥 안돌아감

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // js와 jsx는 기능상 차이는 없지만, jsx라고 명시하면 jsx문법이구나 하고 알 수 있다.
    },
    entry: {
        app: ['./src/index']
    },

    module: {
        //무조건 loader만 들어간다.
        rules: [
            {
                test: /\.(js | jsx | ts | tsx)?/, // 정규 표현식, js랑 jsx 다 가져간다 이뜻
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'), // 상세 경로 설정
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'), // 이 곳에 있는 파일에 변화를 계속 업로드 하겠다. 이건 서버가 하는데, 포트번호 지정 필요
        port: 8000 // 개발 전용 서버니까 8000을 넣자.
    }
} // resolve를 적용해서 entry를 보내고 module을 거쳐 output으로 빠져나오는 식이다.