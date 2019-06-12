 $(function(){
        csmapi.set_endpoint ('http://140.113.199.189:9999');
        var profile = {
		    'dm_name': 'Smartphone_0616100',          
			'idf_list':[],
			'odf_list':[Acceleration_0616100],
		        'd_name': 'Smartphone0616100',
        };
        function Acceleration_0616100(data){
            console.log(data);
            if(Math.abs(data[0]) > Math.abs(data[1])){
                gInputEngine.actions['sniper_down'] = false;
                gInputEngine.actions['sniper_up'] = false;
                if(data[0]>0){
                    gInputEngine.actions['sniper_right'] = false;
                    gInputEngine.actions['sniper_left'] = true;
                }
                else{
                    gInputEngine.actions['sniper_right'] = true;
                    gInputEngine.actions['sniper_left'] = false;
                }
            }
            else{
                gInputEngine.actions['sniper_right'] = false;
                gInputEngine.actions['sniper_left'] = false;
                if(data[1]>0){
                    gInputEngine.actions['sniper_down'] = false;
                    gInputEngine.actions['sniper_up'] = true;
                }
                else{
                    gInputEngine.actions['sniper_down'] = true;
                    gInputEngine.actions['sniper_up'] = false;
                }
            }
        }
      
/*******************************************************************/                

        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
