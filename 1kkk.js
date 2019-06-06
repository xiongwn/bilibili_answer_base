// 禁用急速漫画右键回页
function ajaxloadimage(cpfobject, isrefreshad) {
	var mkey = '';
	if ($("#dm5_key").length > 0) {
		mkey = $("#dm5_key").val();
	}
	if (!DM5_REFRESH && $("#cp_image").length > 0) {
		$("#cp_image").css("width", "auto");
		$("#cp_image").css("height", "auto");
	}
	showload(cpfobject);
	if (ajaxobject != null) {
		ajaxobject.abort();
		ajaxobject = null;
	}
	var currenpg = DM5_PAGE;
	ajaxobject = $.ajax({
		url: 'chapterfun.ashx',
		data: { cid: DM5_CID, page: DM5_PAGE, key: mkey, language: 1, gtk: 6, _cid: DM5_CID, _mid: DM5_MID, _dt: DM5_VIEWSIGN_DT, _sign: DM5_VIEWSIGN },
		type: 'GET',
		error: function (msg) {
		},
		success: function (msg) {
			if (msg != '') {
				var arr;
				eval(msg);
				arr = d;
				if (typeof (d_c) != 'undefined') {
					errorimage = d_c;
				}
				var ishide = false;
				if (typeof (hd_c) != 'undefined' && hd_c.length > 0 && typeof (isrevtt) != "undefined") {
					ishide = true;
				}
				var html;
				var cd;
				if (cpfobject.length > 0) {
					html = "<img src=\"" + arr[0] + "\" style=\"";
					if (ishide) {
						html += "display:none;";
					}
					html += "cursor:pointer;\"  id=\"cp_image\" ";
					html += "/>";
					if (ishide) {
						html += "<img src=\"" + hd_c[0] + "\" style=\"";
						html += "cursor:pointer;\"  id=\"cp_image2\" ";
						html += "/>";
					}

				} else {
					html = "<img src=\"" + arr[0] + "\" style=\"";
					if (ishide) {
						html += "display:none;";
					}
					html += "cursor:pointer;border:2px solid #111; padding:2px;background:white;\"  id=\"cp_image\"  ";
					html += "/>";
					if (ishide) {
						html += "<img src=\"" + hd_c[0] + "\" style=\"";
						html += "cursor:pointer;border:2px solid #111; padding:2px;background:white;\"  id=\"cp_image2\" ";
						html += "/>";
					}
				}
				cd = $(html);
				setTimeout(a,1000)
				if (typeof (DM5_LOADIMAGEURL) != "undefined") {
					if (cpfobject.length > 0) {
						cpfobject.append(cd);
					}
					else {
						$("#showimage").append(cd);
					}
				}
				else {
					if (cpfobject.length > 0) {
						cpfobject.html(cd);
					}
					else {
						$("#showimage").html(cd);
					}
				}
				var isready = false;
				if (ishide) {
					if (typeof (DM5_LOADIMAGEURL) != "undefined") {
						if ($(".cp_tbimg").length > 0) {
							$(".cp_tbimg").css("vertical-align", "top");
						}

						if ($("#imgloading").length > 0) {
							$("#imgloading").hide();
						}
					}
				}
				else {
					$("#cp_image").load(function () {
						hideload();
						if (errorimage != null && errorimage.length > 0 && typeof (isrevtt) != "undefined") {
							loadimage(errorimage, 1, DM5_CID);
						}
						else {
							loadimage(arr, 1, DM5_CID);
						}
					});
					if (currenpg == DM5_PAGE) {
						imageReady(arr[0], function () { if (currenpg != DM5_PAGE) { return; } _imagerealheight = this.height; _imagerealwidth = this.width; if (!isready) { isready = true; resetimagesize(); } $("#imgloading").fadeTo(2000, 0.1); }, function () {
							if (currenpg != DM5_PAGE) { return; } hideload(); if (!isready) { resetimagesize(); }
						}, function () { hideload(); });

					}
				}

				$("#showimage").attr("title", "");
				if (isrefreshad) {
					$("#adjs_id div").css("visibility", "hidden");
					setTimeout(function () {
						SetAdPosation()
					}, 100);
				}
			}
		}
	});
}
function a(){$('#cp_image').mousedown(function(e) {
	$('#cp_image').off('mouseup')
	document.oncontextmenu=new Function('event.returnValue=true;');
	if (e.button == 0 || e.button == 1) {
		if (setautosite() == true) {
			return;
		}
		if (nextpage) {
			if (showerrorimage()) {
				return;
			}
			if (DM5_REFRESH) {
				if (DM5_PAGE != DM5_IMAGE_COUNT) {
					window.location.href = setAnchorUrl(nextpage, "cuadpg");
				} else {
					if(nextpage.indexOf('end') != -1){
						ShowEnd();
					}
					else{
						window.location.href = nextpage;
					}
				}
			}
			else {
				ShowNext();
			}

		}
	}
})
}
a()
