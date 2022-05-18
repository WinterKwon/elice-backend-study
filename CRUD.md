## MongoDB와 Mongoose
* Mongoose는 MongoDB의 collection을 모델화하여 관련 기능을 쉽게 사용할 수 있게 도와주는 패키지이다. 

* 코드레벨에서 스키마 관리할 수 있다

* populate()으로 RDBMS의 join 기능 구현
    
    그러나 populate는 메모리를 많이 차지하는 연산이다. populate를 자주 사용하는 건 NoSQL의 장점을 상쇄한다. 

### Mongoose ODM 사용 순서

1. 스키마 정의
```
const {Schema} = require('mongoose');
const PostSchema = new Schema({
	title : String,
content : String,

}, {
	timestamps: true
});

module.exports = PostSchema;  
```

2. 모델만들기
```
##models/schemas/post

const { Schema } = require('mongoose');

// PostSchema 정의하기
const PostSchema = new Schema({
  // title: string, required
  // content: string, required
  title : { type : String, 
            required : true
            },
  content : { type : String, 
            required : true
            }
}, {
  timestamps: true,
})

module.exports = PostSchema;
```

2.1 id관리 

방법은 3가지

(1) nanoid의 shortId 이용

npm i nanoid
```
const {nanoid} = require('nanoid');

const shortId = {
    type : String,
    default : ()=> {return nanoid()},
    require : true,
    index: true
};

module.exports = shortId;
```
```
const mongoose = require('mongoose');
const Postschema = require('./schemas/post');

exports.Post = mongoose.model('Post', Postschema);
```

(2) auto-increment 모듈 설치

npm i mongoose-auto-increment
```
const autoIncrement = require('mongoose-auto-increment');

//autoincrement는 사용시 접속 초기화를 한번 해줘야 한다
autoIncrement.initialize(mongoose);

const blog = new Schema({
    title : {
        type : String,
        required : true,
    }, 
    content : {
        type : String,
        required : true
    },
    no : Number,
}, {timestamps : true});

blog.plugin(autoIncrement.plugin, {
    model: 'blog',
    field : 'no',
    startAt: 4,
    increment : 1

});
```

(3) ObjectId 이용

populate()동작하려면 ObjectId를 써야한다.
```
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author : {
    type : Schema.Types.ObjectId,  //populate()동작하도록 타입과 레퍼런스
  }
}, {
  timestamps: true,
})
```

3. 데이터베이스 연결
```
//DB연결
const mongoose = require('mongoose');
const {MONGO_URL} = process.env;
mongoose.connect(MONGO_URL, {useNewUrlParser:true,
                            useUnifiedTopology: true    
}).then(()=> console.log("Connected to MongoDB"))
.catch(err=> console.log(err));
```
#.env파일에 포트 및 url 정보 은닉

4. 모델 사용
