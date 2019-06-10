 $(function(){
        set_endpoint('http://iottalk2.tw:9992');
		set_PUSH_INTERVAL(500);  // unit: ms
		
        var profile = {
		    'dm_name': 'snake313',          
			'idf_list': [],
		    'odf_list':[[snake313,['None']]],
		    'u_name': 'jolene'
        };
		controlvalue = 0;
	//	event1 = new CustomEvent('control',{'detail':{value: controlvalue}});
	//	event2 = new CustomEvent('controlend',{'detail':{value: controlvalue}});
		
        function snake313(data){
			//event2 = new CustomEvent('controlend',{'detail':{value: 0}});
			//document.dispatchEvent(event2);
			var tempa, tempb, tempc;
			tempc = data[2];
			tempb = data[1];
			tempa = data[0];
			if(tempc > 13){//bomb
				$('.action')[0].innerText="bomb";
				controlvalue = 32;
				event1 = new CustomEvent('control',{'detail':{value: 32}});
				document.dispatchEvent(event1);
				event2 = new CustomEvent('controlend',{'detail':{value: 32}});
				document.dispatchEvent(event2);
			}
			
			else if(tempa < -4){//right
				$('.action')[0].innerText="right";
				controlvalue = 39;
				event1 = new CustomEvent('control',{'detail':{value: 39}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 39}});
					document.dispatchEvent(event2);},600);

			}
			
			else if(tempa > 4){//left
				$('.action')[0].innerText="left";
				controlvalue = 37;
				event1 = new CustomEvent('control',{'detail':{value: 37}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 37}});
					document.dispatchEvent(event2);},600);
			}
			
			else if(tempb < -2){//up
				$('.action')[0].innerText="up";
				controlvalue = 38;
				event1 = new CustomEvent('control',{'detail':{value: 38}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 38}});
					document.dispatchEvent(event2);},600);
			}
			
			else if(tempb > 4){//down
				$('.action')[0].innerText="down";
				controlvalue = 40;
				event1 = new CustomEvent('control',{'detail':{value: 40}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 40}});
					document.dispatchEvent(event2);},600);
			}
			
			else
				controlvalue = 0;	
        }
      
/*******************************************************************/                
        function ida_init(){console.log('Success.');}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
