적용법 : -uroot -p비밀번호  (데이타베이스이름)  < test.sql

설명 :
-------------------------------사용자-------------------------------
  -user : 사용자 계정 정보
    1) id : id정보
    2) pw : pw정보
    3) point : 보유 point정보
    4) createTime : 계정 생성 시간(YYYY-MM-DD HH:mm:SS)
    5) buyingAmount : 누적 구매량
    6) reportCount : 해당유저에 대한 신고 수
    7) admin : 어드민 확인
  -payedList : 사용자가 결제한 팁 목록(서재)
    1) tip_id : 팁의 고유 id
    2) user_id : 구매자 고유 id
    3) id : 구매한 팁의 개수
    4) post_price : 구매한 팁의 가격
    5) buyingTime : 해당 팁 구매한 시간(YYYY-MM-DD HH:mm:SS)
--------------------------------------------------------------------
---------------------------------팁---------------------------------
  -tip : 생성된 팁의 정보
    1) contents : 내용
    2) category : 분야
    3) createTime : 생성 시간(YYYY-MM-DD HH:mm:SS)
    4) id : 고유 id
    5) price : 가격
    6) title : 제목
    7) like : 좋아요 정보
    8) view : 조회수
    9) salesVolume : 판매량
    10) rank : 랭킹 스코어
    12) user_id : 생성자 id
  -tipFile : 팁의 첨부파일
    1) fileLink : 첨부파일 링크
    2) tip_id : 팁의 고유 id
  -tipComment : 팁의 댓글
    1) comment : 내용
    2) createTime : 생성 시간(YYYY-MM-DD HH:mm:SS)
    3) id : 고유 id
    4) tip_id : 해당 댓글이 달린 팁의 고유 id
    5) user_id : 생성자 id
  -tipReport : 팁 신고
    1) reportId : 신고 내용(리스트 선택형)
    2) id : 고유 id
    3) reportTime : 신고 시간(YYYY-MM-DD HH:mm:SS)
    4) tip_id : 대상 팁 고유 id
    5) user_id : 신고자 id
--------------------------------------------------------------------
-----------------------------자유게시판------------------------------
  -freeBoard : 생성된 자유게시판의 정보
    1) contents : 내용
    3) createTime : 생성 시간(YYYY-MM-DD HH:mm:SS)
    4) id : 고유 id
    6) title : 제목
    7) like : 좋아요 정보
    8) view : 조회수
    10) rank : 랭킹 스코어
    12) user_id : 생성자 id
  -freeBoardFile : 자유게시판의 첨부파일
    1) fileLink : 첨부파일 링크
    2) freeBoard_id : 자유게시판의 고유 id
  -freeBoardComment : 자유게시판의 댓글
    1) comment : 내용
    2) createTime : 생성 시간(YYYY-MM-DD HH:mm:SS)
    3) id : 고유 id
    4) freeBoard_id : 해당 댓글이 달린 자유게시판의 고유 id
    5) user_id : 생성자 id
  -freeBoardReport : 자유게시판 신고
    1) reportId : 신고 내용(리스트 선택형)
    2) id : 고유 id
    3) reportTime : 신고 시간(YYYY-MM-DD HH:mm:SS)
    4) freeBoard_id : 대상 자유게시판 고유 id
    5) user_id : 신고자 id
--------------------------------------------------------------------
