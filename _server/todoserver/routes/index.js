import model from '../models/index.js';
import express from 'express';
import ejs from 'ejs';

const router = express.Router();

// 메인 페이지
router.get('/', function(req, res, next) {
  res.redirect('/list');
});

// 할일 목록 조회
router.get('/list', async function(req, res, next) {
  try{
    const list = model.list(req.query);
    
    ////////// 큰 데이터를 가정해서 body 응답 시간을 늘림 ///////////
    const response = await ejs.renderFile('./views/index.ejs', { list });
    const first = response.substring(0, response.indexOf('<body>')+7);
    const second = response.substring(response.indexOf('<body>')+7);

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write(first);
    setTimeout(async () => {
      res.end(second);
    }, 1000);
    //////////////////////////////////////////////////////////////

    // 정상적인 응답
    // res.render('index', { list });
  }catch(err){
    next(err);
  }
});

// 할일 등록
router.post('/regist', function(req, res, next) {
  try{
    model.create(req.body);
    res.redirect('/list');
  }catch(err){
    next(err);
  }
});

// 할일 수정
router.get('/update/:_id', function(req, res, next) {
  try{
    model.update(Number(req.params._id), { done: JSON.parse(req.query.done) });
    res.redirect('/list');
  }catch(err){
    next(err);
  }
});

// 할일 삭제
router.post('/delete', function(req, res, next) {
  try{
    model.remove(Number(req.body._id));
    res.redirect('/list');
  }catch(err){
    next(err);
  }
});

// DB 초기화
router.get('/init', async function(req, res, next) {
  try{
    await model.init();
    res.redirect('/list');
  }catch(err){
    next(err);
  }
});

export default router;
