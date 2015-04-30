/*返回某一周的开始日期和结束日期
 * params date Date对象， cn bool
 * return obj [ (Date)start,(Date)end  ]
 */
function clh_GetWeekRange(date, cn)
{
    cn = arguments[1] !== false ? true : false;
    var nowDate, month, year, nowDay,  startDate, endDate;
    var weekRange = new Object();
    weekRange.start = new Date();
    weekRange.end = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    nowDate = date.getDate();
    nowDay = date.getDay();
    switch(nowDay)
    {
        //当周日的时候，cn为六天前到今天，en为今天到六天后
        case 0 :
            startDate = cn ? nowDate - 6 : nowDate;
            endDate = cn ?  nowDate : nowDate + 6;
            break;
        //当周六的时候，cn为五天前到明天，en为六天前到今天
        case 6 :
            startDate = cn ? nowDate - 5 : nowDate - 6 ;
            endDate = cn ? nowDate + 1 : nowDate;
            break;
        default :
            startDate = cn ? nowDate - nowDay + 1 : nowDate - nowDay;
            endDate = cn ? nowDate - nowDay + 7 : nowDate - nowDay + 6;
    }
    weekRange.start.setFullYear(year, month, startDate);
    weekRange.end.setFullYear(year, month, endDate);
    return weekRange;
}

function clh_setHumanDate(year, month, day)
{
    var date = new Date();
    date.setFullYear(year, month - 1, day);
    return date;
}

function clh_getHumanDate(date, delimiter)
{
    var nowdate = new Object();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = date.getDay();
    var weekCn;
    switch(week)
    {
        case 1 :
            weekCn = '星期一';
            break;
        case 2:
            weekCn = '星期二';
            break;
        case 3:
            weekCn = '星期三';
            break;
        case 4:
            weekCn = '星期四';
            break;
        case 5:
            weekCn = '星期五';
            break;
        case 6:
            weekCn = '星期六';
            break;
        case 0:
            week = 7;
            weekCn = '星期日';
            break;
    }
    var ojb = {
        'year':year,
        'month':month,
        'day':day,
        'week':week,
        'weekCn':weekCn
    }
    if(delimiter)
    {
        return ojb.year + delimiter + ojb.month + delimiter + ojb.day 
    }else{
        return ojb ;
    }
}


var year, month, day;
//year = month = day = null;
var date = clh_setHumanDate(2015,4,26);
dateRange = clh_GetWeekRange(date,true);
var date1 = clh_getHumanDate(dateRange.end,'-');
var date2 = clh_getHumanDate(dateRange.start,'-');


alert(date1);
alert(date2);