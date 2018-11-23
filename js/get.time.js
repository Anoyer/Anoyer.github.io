function clock_12h()
{
 var today = new Date(); //��õ�ǰʱ��
 //����ꡢ�¡��գ�Date()�����е��·��Ǵ�0��11����
 var year = today.getFullYear();  
 var month = today.getMonth()+1;
 var date = today.getDate();
 var hour = today.getHours();  //���Сʱ�����ӡ���
 var minute = today.getMinutes();
 var second = today.getSeconds();
 
 var apm="AM"; //Ĭ����ʾ����: AM
 if (hour>12) //��12Сʱ����ʾ
 {
    hour=hour-12;
    apm="PM"  ;
 }
 var weekday = 0;
 switch(today.getDay()){
    case 0:
  	weekday = "������";
	break;
    case 1:
  	weekday = "����һ";
	break;
	case 2:
  	weekday = "���ڶ�";
	break;
	case 3:
  	weekday = "������";
	break;
	case 4:
  	weekday = "������";
	break;
	case 5:
  	weekday = "������";
	break;
	case 6:
  	weekday = "������";
	break;
 }
 
  /*����div������Ϊ��ǰʱ��*/
 document.getElementById("myclock").innerHTML=""+year+"��"+month+"��"+date+"��"+weekday;
}
/*ʹ��setInterval()ÿ���ָ����������clock_12h()*/
var myTime = setInterval("clock_12h()",1000);