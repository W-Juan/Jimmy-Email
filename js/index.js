/**
 * Created by Liu_Y on 2016/12/20.
 */
var empty="收件人邮箱地址";
$("#bs-example-navbar-collapse-1 .second_a").click(function () {      //xs页面时点击导航内容自动回收
    if ($(window).width() < 751) {
        $('#bs-example-navbar-collapse-1').collapse('hide')
    }
    //$(".navbar-toggle:visible").click();
});

//删除选中的元素
function deleteChecked(scopeArr,jsArr){
    for(var i=0;i<scopeArr.length;i++){
        if(scopeArr[i].selected){
            jsArr.splice(i, 1);
            i--;
        }
    }
}
//生成每一页
function createPage(currentPage){
    var arr=[];
    if(currentPage*maxNum>=inboxArr.length){
        for(var i=(currentPage-1)*maxNum;i<inboxArr.length;i++){
            arr.push(inboxArr[i]);
        }
    }else{
        for(var j=(currentPage-1)*maxNum;j<=currentPage*maxNum-1;j++){
            arr.push(inboxArr[j]);
        }
    }
    return arr;
}
//生成页码
function createNum(pageNum){
    var arr=[];
    for(var j=0;j<pageNum;j++){
        var btnObj={};
        btnObj.num=j+1;
        btnObj.active=false;
        arr.push(btnObj);
    }
    return arr;
}
//接收邮件
var inboxArr=[
    {
        id:"1",
        personName:"小A",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"123456@qq.com",
        selected:false
    },{
        id:"2",
        personName:"小B",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"3",
        personName:"小C",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"456789@qq.com",
        selected:false
    },{
        id:"4",
        personName:"小D",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"376584@qq.com",
        selected:false
    },{
        id:"5",
        personName:"小E",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"6",
        personName:"小F",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"7",
        personName:"小G",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"8",
        personName:"小H",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"9",
        personName:"小I",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    }, {
        id:"10",
        personName:"小J",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"123456@qq.com",
        selected:false
    },{
        id:"11",
        personName:"小K",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"12",
        personName:"小C",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"456789@qq.com",
        selected:false
    },{
        id:"13",
        personName:"小L",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"376584@qq.com",
        selected:false
    },{
        id:"14",
        personName:"小M",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"15",
        personName:"小N",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"16",
        personName:"小O",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"17",
        personName:"小P",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    },{
        id:"18",
        personName:"小Q",
        title:"工作总结",
        date:"2016-05-14",
        content:"市场部本周工作总结",
        email:"345678@qq.com",
        selected:false
    }
];
//好友列表
var friendList=[
    {
        personName:"刘婷",
        email:"18382230408@163.com",
        tel:"18382230408",
        signature:"今天很开心！",
        headImg:"../image/headImg1.jpg",
        selected:false

    },{
        personName:"童话",
        email:"5884644@163.com",
        tel:"1545746464",
        signature:"人生再美怎如初见",
        headImg:"../image/headImg2.jpg",
        selected:false
    },{
        personName:"曾同学",
        email:"345789452@qq.com",
        tel:"18380413787",
        signature:"我胖我骄傲",
        headImg:"../image/headImg3.jpg",
        selected:false
    },{
        personName:"刘阳",
        email:"13183899539@163.com",
        tel:"13183899539",
        signature:"好好学习，天天向上",
        headImg:"../image/headImg4.jpg",
        selected:false
    },{
        personName:"张瑶",
        email:"858546786@163.com",
        tel:"1385487695",
        signature:"How are you",
        headImg:"../image/headImg5.jpg",
        selected:false
    }];
var friendNum=friendList.length;
//发件箱
var outArr=[
    {
    id:"1",
    personName:"小A",
    title:"实验报告",
    date:"2015-12-1",
    content:"嵌入式Linux实验报告",
    selected:false
}];
var maxNum=10;   //单页显示数目

var url=window.location.href;
var userName=url.substring(url.indexOf("?")+1,url.indexOf("#"));

var app=angular.module("myApp",["ngRoute"]);
app.controller("outerCtr",["$scope",function($scope){
    $scope.empty =empty;
    $scope.userName="535165469@qq.com";
}]);

//收件箱
app.controller("inboxCtr",["$scope",function($scope){
    $scope.checkAll=false;
    $scope.inboxArr=inboxArr;
    $scope.pageNum=Math.ceil($scope.inboxArr.length/maxNum);
    $scope.numArr=createNum($scope.pageNum);
    $scope.numArr[0].active = true;
    $scope.currentPage=1;
    $scope.nextDisabled=false;
    $scope.preDisabled=false;
    $scope.showArr=createPage($scope.currentPage);
    $scope.checkChange=function(checked){
        if(!checked){
            $scope.checkAll=false;
        }else{
            for(var i=0;i<$scope.showArr.length;i++){
                if(!$scope.showArr[i].selected) {
                    $scope.checkAll=false;
                    break;
                }else{
                    $scope.checkAll=true;
                }
            }
        }
    };
    $scope.setStyle =function(current){
        angular.forEach($scope.numArr,function(item){
            item.active=false;
        });
        current.active=true;
    };
    //换页
    $scope.changePage=function(page){
        $scope.showArr=createPage(page.num);
        $scope.currentPage=page.num;
        $scope.setStyle(page);
        if( $scope.currentPage==1){
            $scope.preDisabled=true;
            $scope.nextDisabled=false;
        }else if($scope.currentPage==$scope.numArr.length){
            $scope.nextDisabled=true;
            $scope.preDisabled=false;
        }else{
            $scope.preDisabled=false;
            $scope.nextDisabled=false;
        }
    };
    //全选
    $scope.selectAll=function(){
        if($scope.checkAll){
            angular.forEach($scope.inboxArr,function(item){
                item.selected=true;
            })
        }else{
            angular.forEach($scope.inboxArr,function(item){
                item.selected=false;
            })
        }
    };
    $scope.prePage=function(){
        $scope.currentPage=$scope.currentPage-1;
        $scope.changePage($scope.numArr[$scope.currentPage-1]);
    };
    $scope.nextPage=function(){
        $scope.changePage($scope.numArr[$scope.currentPage]);
    }
}]);
//发件箱
app.controller("outboxCtr",["$scope",function($scope){
    $scope.num=$scope.outArr;
    $scope.outArr=outArr;
    $scope.deleteEmail=function(){
        deleteChecked($scope.outArr,outArr);
    }
}]);
//好友列表
app.controller("contactsCtr",["$scope",function($scope){
    $scope.friendArr=friendList;
    $scope.friendsNum=friendNum;
    $scope.visible=false;
    $scope.friend={};
    $scope.searchFriend="";
    $scope.searchNum=function(){
        $scope.friendsNum=friendNum;
    };
    //打开详情
    $scope.showDetail=function(friend){
        $scope.friend=friend;
        $scope.visible=true;
    };
    //删除选中好友
    $scope.deleteFriends=function(){
        deleteChecked($scope.friendArr,friendList);
        $scope.friendsNum=$scope.friendArr.length;
    }
}]);
//邮件详情
app.controller("emailDetailCtr",["$scope","$routeParams",function($scope,$routeParams){
    $scope.email=JSON.parse($routeParams.email);
    $scope.visible=false;
    $scope.href="";
    //快捷回复
    $scope.sendEmail=function(){
        if($scope.content!=""){
            var email={};
            email.title="无标题";
            email.date=new Date();
            email.personName=$scope.email.email;
            console.log($scope.content);
            email.content=$scope.sendContent;
            outArr.push(email);
            layer.alert("邮件发送成功，可到收件箱查看！", {icon: 6});
            $scope.href=("#/outbox");
        }else{
            layer.alert("邮件信息不能为空", {icon: 5});
        }

    };
    $scope.fastReply=function(){
        $scope.visible = true;
    }
}]);
//写邮件
app.controller("writeEmailCtr",["$scope","$routeParams",function($scope,$routeParams){
    $scope.user="535165469@qq.com";
    $scope.friendEmail=$routeParams.friendEmail;
    $scope.href="";
    $scope.addCC=true;
    $scope.addBcc=true;
    $scope.send=function(){
        var reg =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(reg.exec($scope.friendEmail)){
            var email={};
            email.title=$scope.sendTitle;
            email.date=new Date();
            email.personName=$scope.friendEmail;
            email.content=$scope.content;
            outArr.push(email);
            $scope.href=("#/outbox");
            layer.alert("邮件发送成功，可到收件箱查看！", {icon: 6});
            $scope.href=("#/outbox");
        }else{
            layer.alert("收件人信息有误", {icon: 5});
        }
    }
}]);

//配置路由
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/inbox",{
        controller:"inboxCtr",
        templateUrl:"inbox.html"
    }).when("/outbox",{
        controller:"outboxCtr",
        templateUrl:"outbox.html"
    }).when("/contacts",{
        controller:"contactsCtr",
        templateUrl:"contacts.html"
    }).when("/emailDetail:email",{
        controller:"emailDetailCtr",
        templateUrl:"emailDetail.html"
    }).when("/writeEmail:friendEmail",{
        controller:"writeEmailCtr",
        templateUrl:"writeEmail.html"
    }).otherwise({redirectTo:"/inbox"});
}]);

//搜索好友
app.filter("filterName",function(){
    return function(items,searchInput){
        var resultArr=[];
        angular.forEach(items, function(item){
            var search=searchInput.toLowerCase();
            //全部转换成小写，不区分大小写
            if(item['personName'].toLowerCase().match(search)){
                resultArr.push(item);
            }
        });
        friendNum=resultArr.length;
        return resultArr;
    };
});

//自定义指令，好友信息详情
app.directive("detail",function(){
    return {
        restrict:"AE",
        templateUrl:"detail.html",
        scope:{
            friend:"=friend"
        }
    }
});

