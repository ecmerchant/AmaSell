function repajax(e,t,n){var a=document.getElementById("maxnumber").value;""==a&&(a=9600),a=Number(a);var o=[];if(o[0]=e,o[1]=t,o[2]=a,o[3]=n,o=JSON.stringify(o),myData={data:o},"cancel"==document.getElementById("progress").value)return void alert("\u4e2d\u65ad\u3057\u307e\u3059");$.ajax({url:"/items/search",type:"POST",data:myData,dataType:"json",success:function(o){if(""==o)return alert("\u7d42\u4e86\u3057\u307e\u3057\u305f"),document.getElementById("submit_url").innerText="\u30a2\u30de\u30be\u30f3\u53d6\u5f97",void(document.getElementById("submit_url").className="btn btn-success");for(var d=handsontable.getData(),l=0;l<d.length;l++)if(""==d[l][9]){d.length=l;break}d.length;if(Array.prototype.push.apply(d,o),d.length>=a)return d.length=a,handsontable.loadData(d),alert("\u7d42\u4e86\u3057\u307e\u3057\u305f"),document.getElementById("submit_url").innerText="\u30a2\u30de\u30be\u30f3\u53d6\u5f97",void(document.getElementById("submit_url").className="btn btn-success");handsontable.loadData(d),t++,sleep(1500,repajax(e,t,n))},error:function(){return!1}})}function ConnectYahoo(e){var t=e,n=handsontable.getData(),a={title:n[e][8],mpn:n[e][12]},o={data:a};if("cancel"==document.getElementById("progress").value)return void alert("\u4e2d\u65ad\u3057\u307e\u3059");$.ajax({url:"/items/connect",type:"POST",data:o,dataType:"json",success:function(n){var a=[],o=handsontable.getData(),d=Number(o[e][10]),l=Number(o[e][11]),s=o[e][13],r=d-10,c=n[10];0==c&&(c=n[9]);var i=Math.round(r*(100-s)/100)-c;a[0]=[e,3,n[0]];for(var m=1;m<n.length;m++)a[m]=[e,14+m,n[m]];(r<0||0==c||d>l||r<n[2]||r<n[3])&&(r=0,i=0),a[m]=[e,4,String(r)],a[m+1]=[e,5,String(i)],a[m+2]=[e,6,String(c)],handsontable.setDataAtCell(a),t++;var u=handsontable.getData().length;t<u?sleep(500,ConnectYahoo(t)):(alert("\u7d42\u4e86\u3057\u307e\u3057\u305f"),document.getElementById("connet_yahoo").innerText="\u30e4\u30d5\u30aa\u30af\u53d6\u5f97",document.getElementById("connet_yahoo").className="btn btn-success",document.getElementById("progress").value="cancel")},error:function(){return!1}})}function ReloadYahoo(e){for(var t=handsontable.getData();0==t[e][1];)if(++e>t.length-1)return alert("\u7d42\u4e86\u3057\u307e\u3057\u305f"),document.getElementById("reload_yahoo").innerText="\u30c7\u30fc\u30bf\u306e\u66f4\u65b0",document.getElementById("reload_yahoo").className="btn btn-success",void(document.getElementById("progress").value="cancel");var n={url:t[e][20]},a={data:n};if("cancel"==document.getElementById("progress").value)return void alert("\u4e2d\u65ad\u3057\u307e\u3059");$.ajax({url:"/items/reload",type:"POST",data:a,dataType:"json",success:function(t){var n=[],a=handsontable.getData(),o=Number(a[e][10]),d=Number(a[e][11]),l=a[e][13],s=o-10,r=t[4];0==r&&(r=t[3]);var c=Math.round(s*(100-l)/100)-r;n[0]=[e,3,t[0]];for(var i=1;i<t.length;i++)n[i]=[e,19+i,t[i]];if((s<0||0==r||o>d||s<t[2]||s<t[3])&&(s=0,c=0),n[i]=[e,4,String(s)],n[i+1]=[e,5,String(c)],n[i+2]=[e,6,String(r)],handsontable.setDataAtCell(n),!(++e<a.length-1))return void alert("\u7d42\u4e86\u3057\u307e\u3057\u305f");sleep(500,ReloadYahoo(e))},error:function(){return alert("error"),!1}})}function sleep(e,t){setTimeout(t,e)}for(var maxRownum=9600,mydata=[],colOption=[],cheaders=["\u51fa\u54c1","\u66f4\u65b0","\u30a2\u30de\u30be\u30f3","\u30e4\u30d5\u30aa\u30af","\u8ca9\u58f2\u4fa1\u683c","\u898b\u8fbc\u5229\u76ca","\u4ed5\u5165\u4fa1\u683c","\u5546\u54c1URL","\u5546\u54c1\u30bf\u30a4\u30c8\u30eb","ASIN","\u4e2d\u53e4\u6700\u5b89\u5024","\u65b0\u54c1\u6700\u5b89\u5024","\u578b\u756a","\u8ca9\u58f2\u624b\u6570\u6599[%]","\u21d2","\u691c\u7d22URL","\u691c\u7d22\u30ad\u30fc","\u6700\u9ad8\u843d\u672d\u4fa1\u683c","\u5e73\u5747\u843d\u672d\u4fa1\u683c","","\u5019\u88dcURL","\u5546\u54c1\u540d","\u30e4\u30d5\u30aa\u30afID","\u73fe\u5728\u4fa1\u683c","\u5373\u6c7a\u4fa1\u683c","\u51fa\u54c1\u8005","\u826f\u3044\u8a55\u4fa1","\u60aa\u3044\u8a55\u4fa1","\u753b\u50cf1","\u753b\u50cf2","\u753b\u50cf3","\u753b\u50cf4","\u753b\u50cf5"],maxColnum=cheaders.length,i=0;i<maxRownum;i++){mydata[i]=[];for(var j=0;j<maxColnum;j++)mydata[i][j]="";mydata[i][14]="\u21d2",mydata[i][0]=!1,mydata[i][1]=!1}for(var i=0;i<maxColnum;i++)colOption[i]="",0!=i&&1!=i||(colOption[i]={type:"checkbox",className:"htCenter htMiddle"}),2!=i&&3!=i&&7!=i&&15!=i&&20!=i||(colOption[i]={renderer:"html",className:"htCenter htMiddle"}),4!=i&&5!=i&&6!=i&&10!=i&&11!=i&&13!=i&&17!=i&&18!=i&&23!=i&&24!=i&&26!=i&&27!=i||(colOption[i]={className:"htCenter htMiddle"});var container=document.getElementById("result"),handsontable=new Handsontable(container,{width:1160,height:320,contextMenu:!0,data:mydata,wordWrap:!1,rowHeaders:!0,colHeaders:cheaders,maxCols:maxColnum,maxRows:maxRownum,columnSorting:!0,sortIndicator:!0,fixedColumnsLeft:7,manualColumnResize:!0,autoColumnSize:!1,colWidths:[40,40,90,90,80,80,80,80,120,80,80,80,80,80,20,90,90,80,80,5,80,120,80,80,80,80,80,80,40,40,40,40,40,40],rowHeights:70,className:"htMiddle",columns:colOption});$("#hide").click(function(){"\u975e\u8868\u793a"==document.getElementById("hide").innerText?(document.getElementById("hide").innerText="\u8868\u793a",document.getElementById("hide").className="btn btn-warning",handsontable.updateSettings({colWidths:[40,40,90,90,80,80,80,1,1,1,80,80,1,1,1,1,1,80,80,1,1,1,1,80,80,80,80,80,1,1,1,1,1,1]}),handsontable.render()):(document.getElementById("hide").innerText="\u975e\u8868\u793a",document.getElementById("hide").className="btn btn-success",handsontable.updateSettings({colWidths:[40,40,90,90,80,80,80,80,120,80,80,80,80,80,20,90,90,80,80,5,80,120,80,80,80,80,80,80,40,40,40,40,40,40]}),handsontable.render())}),$("#submit_url").click(function(){if("\u30a2\u30de\u30be\u30f3\u53d6\u5f97"==document.getElementById("submit_url").innerText){alert("\u30a2\u30de\u30be\u30f3\u306e\u60c5\u5831\u53d6\u5f97\u3092\u958b\u59cb\u3057\u307e\u3059");var e=document.getElementById("input_url").value;document.getElementById("submit_url").innerText="\u4e2d\u65ad",document.getElementById("submit_url").className="btn btn-warning",document.getElementById("progress").value="continue",handsontable.loadData(mydata),repajax(e,1,0)}else document.getElementById("submit_url").innerText="\u30a2\u30de\u30be\u30f3\u53d6\u5f97",document.getElementById("submit_url").className="btn btn-success",document.getElementById("progress").value="cancel"}),$("#connet_yahoo").click(function(){if("\u30e4\u30d5\u30aa\u30af\u53d6\u5f97"==document.getElementById("connet_yahoo").innerText){for(var e=handsontable.getData(),t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)n>2&&n<6&&(e[t][n]=""),n>14&&(e[t][n]="");handsontable.loadData(e),handsontable.render(),alert("\u30e4\u30d5\u30aa\u30af\u304b\u3089\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059"),document.getElementById("connet_yahoo").innerText="\u4e2d\u65ad",document.getElementById("connet_yahoo").className="btn btn-warning",document.getElementById("progress").value="continue";ConnectYahoo(0)}else document.getElementById("connet_yahoo").innerText="\u30e4\u30d5\u30aa\u30af\u53d6\u5f97",document.getElementById("connet_yahoo").className="btn btn-success",document.getElementById("progress").value="cancel"}),$("#reload_yahoo").click(function(){if("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0"==document.getElementById("reload_yahoo").innerText){alert("\u30e4\u30d5\u30aa\u30af\u304b\u3089\u60c5\u5831\u3092\u518d\u53d6\u5f97\u3057\u307e\u3059"),document.getElementById("reload_yahoo").innerText="\u4e2d\u65ad",document.getElementById("reload_yahoo").className="btn btn-warning",document.getElementById("progress").value="continue";ReloadYahoo(0)}else document.getElementById("reload_yahoo").innerText="\u30c7\u30fc\u30bf\u306e\u66f4\u65b0",document.getElementById("reload_yahoo").className="btn btn-success",document.getElementById("progress").value="cancel"}),$("#output").click(function(){for(var e=handsontable.getData(),t="",n=0;n<e.length;n++)t=t+e[n][0]+"\n";var a=Encoding.stringToCode(t),o=new Uint8Array(a),d=new Blob([o],{type:"text/tsv"});window.navigator.msSaveBlob?(window.navigator.msSaveBlob(d,"list.txt"),window.navigator.msSaveOrOpenBlob(d,"list.txt")):document.getElementById("output").href=window.URL.createObjectURL(d)});var selected_container=document.getElementById("selected"),init=[];init[0]=[],init[0][0]="";var selected_handsontable=new Handsontable(selected_container,{width:640,height:60,colWidths:[540],rowHeaderWidth:100,data:init,colHeaders:!1,rowHeaders:["\u9078\u629e\u4e2d\u306e\u30bb\u30eb"],maxRows:1,manualColumnResize:!0,autoColumnSize:!0,wordWrap:!1});Handsontable.hooks.add("afterSelectionEnd",function(){var e=handsontable.getValue(),t=[];t[0]=[],t[0][0]=e,selected_handsontable.loadData(t),selected_handsontable.render()},handsontable);for(var maxRownum_csv=9600,mydata_csv=[],colOption_csv=[],maxColnum_csv=28,mydata_csv=gon.csv_head,i=0;i<maxColnum_csv;i++)colOption_csv[i]="";var container_csv=document.getElementById("result_csv"),handsontable_csv=new Handsontable(container_csv,{width:1160,height:320,contextMenu:!0,data:mydata_csv,wordWrap:!1,rowHeaders:!0,colHeaders:!0,maxCols:maxColnum_csv,maxRows:maxRownum_csv,manualColumnResize:!0,autoColumnSize:!1,colWidths:80,rowHeights:24,className:"htMiddle",columns:colOption_csv});handsontable_csv.render();var selected_csv_container=document.getElementById("selected_csv"),init=[];init[0]=[],init[0][0]="";var selected_csv_handsontable=new Handsontable(selected_csv_container,{width:640,height:60,colWidths:[540],rowHeaderWidth:100,data:init,colHeaders:!1,rowHeaders:["\u9078\u629e\u4e2d\u306e\u30bb\u30eb"],maxRows:1,manualColumnResize:!0,autoColumnSize:!0,wordWrap:!1});Handsontable.hooks.add("afterSelectionEnd",function(){var e=handsontable_csv.getValue(),t=[];t[0]=[],t[0][0]=e,selected_csv_handsontable.loadData(t),selected_csv_handsontable.render()},handsontable_csv),$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){e.target,e.relatedTarget;handsontable_csv.render(),handsontable_fixed.render()});var sdata=gon.list;if(0!=sdata)var mydata_csv2=sdata;else{var mydata_csv2=gon.csv_head;mydata_csv2[3]=[];for(var x=0;x<mydata_csv2[1].length;x++)mydata_csv2[3][x]=""}var container_fixed=document.getElementById("fixed_csv"),handsontable_fixed=new Handsontable(container_fixed,{width:1160,height:160,contextMenu:!0,data:mydata_csv2,wordWrap:!1,rowHeaders:!0,colHeaders:!0,maxCols:maxColnum_csv,maxRows:4,manualColumnResize:!0,autoColumnSize:!0,rowHeights:24,className:"htMiddle",columns:colOption_csv});handsontable_fixed.render(),$("#setcsv").click(function(){for(var e=handsontable.getData(),t=handsontable_csv.getData(),n=handsontable_fixed.getData(),a=0,o=t[2].length,d=0;d<e.length;d++)if(1==e[d][0]){t[3+a]=[];for(var l=0;l<o;l++)t[3+a][l]=n[3][l];var s=e[d][4],r=.01,c=Math.round(s*r),i=1;t[3+a][0]=e[d][22],t[3+a][1]=s,t[3+a][2]=c,t[3+a][3]=i,t[3+a][4]=e[d][9],t[3+a][5]="ASIN",t[3+a][21]=e[d][28],t[3+a][22]=e[d][29],t[3+a][23]=e[d][30],t[3+a][24]=e[d][31],t[3+a][25]=e[d][32],a++}handsontable_csv.loadData(t);document.getElementById("tab2").click()}),$("#output").click(function(){var e=handsontable_csv.getData(),t="";alert(e);for(var n=0;n<e.length;n++)t=t+e[n].join("\t")+"\n";var a=Encoding.stringToCode(t),o=Encoding.convert(a,"SJIS","UNICODE"),d=new Uint8Array(o),l=new Blob([d],{type:"text/tsv"});window.navigator.msSaveBlob?(window.navigator.msSaveBlob(l,"list.txt"),window.navigator.msSaveOrOpenBlob(l,"list.txt")):document.getElementById("output").href=window.URL.createObjectURL(l)}),$("#upload").click(function(){var e=handsontable_csv.getData();e=JSON.stringify(e),myData={data:e},$.ajax({url:"/items/upload",type:"POST",data:myData,dataType:"json",success:function(){alert("\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u53d7\u3051\u4ed8\u3051\u307e\u3057\u305f")},error:function(){}})}),$("#fixed_save").click(function(){var e=handsontable_fixed.getData();e=JSON.stringify(e),myData={data:e},$.ajax({url:"/items/save",type:"POST",data:myData,dataType:"json",success:function(){alert("CSV\u306e\u8a2d\u5b9a\u3092\u4fdd\u5b58\u3057\u307e\u3057\u305f")},error:function(){}})});