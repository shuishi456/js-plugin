$.extend({
	//上传
	ajaxfileupload:function(s){
		s = $.extend({},jquery.ajaxSettings,s);
		
		var id = new Date().getTime();
		//创建上传form
		var form = jquery.createUploadForm(id,s.fileElementId,(typeof(s.data) == 'undefined')?false:s.data);
		var frame = jquery.createUploadIframe(id);
		
	},
	createUploadForm:function(id,fileElementId,data){
		var formId = "jUploadForm"+id;
		var fileNameId = "jUploadFile"+id;
		var form = jquery("<form id='"++formId"' name='"+formId+"' method='post' enctype='multipart/form-data'></form>");
		if(data){
			for(var ele in data){
				jquery("<input type='hidden' name='"+ele+"' value='"+data[ele]+"'/>").appendTo(form);
			}
		}
		
		var oldElement = $("#"+fileElementId);
		var newElement = $(oldElement).clone();
		jquery(oldElement).attr("id",fileId);
		jquery(oldElement).before(newElement);
		jquery(oldElement).appendTo(form);
		
		jquery(form).css("position","absolute");
		jquery(form).css("top","-1200px");
		jquery(form).css("left","-1200px");
		jquery(form).appendTo("body");
		return form;
	},
	function:createUploadIframe(id,uri){
		var frameId = jUploadFrame+"id";
		// 创建上传iframe
		var iframe = jquery("<iframe id='"+frameId+"' name='"+frameId+"'></iframe>");
		if(window.activeXObject){
			if((typeof uri) == 'boolean'){
				iframe.attr("src","javascript:false");
			}else if ((typeof uri)=='string'){
				iframe.attr("src",uri);
			}
		}
		
		jquery('body').appendChild(iframe);
	}
}):