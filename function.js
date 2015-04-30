/*����ĳһ�ܵĿ�ʼ���ںͽ�������
 * params date Date���� cn bool
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
        //�����յ�ʱ��cnΪ����ǰ�����죬enΪ���쵽�����
        case 0 :
            startDate = cn ? nowDate - 6 : nowDate;
            endDate = cn ?  nowDate : nowDate + 6;
            break;
        //��������ʱ��cnΪ����ǰ�����죬enΪ����ǰ������
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
            weekCn = '����һ';
            break;
        case 2:
            weekCn = '���ڶ�';
            break;
        case 3:
            weekCn = '������';
            break;
        case 4:
            weekCn = '������';
            break;
        case 5:
            weekCn = '������';
            break;
        case 6:
            weekCn = '������';
            break;
        case 0:
            week = 7;
            weekCn = '������';
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