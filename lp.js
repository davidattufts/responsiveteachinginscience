// path = ""  

var color1="#94AEC7" // top/bottom (was 999966)
var color2="#5B8484" // text boundary (was 5B8484)
var color3="#999999" // color for the > and | in links (was 999999)
var color4="#888888" // color for the time (was gray = 666666)
var color5="#5B8484" // color for text titles
var dlevel=0



function pageTitle(pTitle) {
if (pTitle) {document.write("<title>"+pTitle+"</title>");}
else {document.write ("<title>Resources for Responsive Teaching in Science</title>");}
}

// Main page:  headerStuff("","Online Instructor's Resource for LEPS ","publisher")

function headerStuff(path,moduleid,title,xfilename,xlevel,teacherID) {
//moduleid

var bannerImage
var iestring, operastring, donothing 
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
// iestring="_"+BrowserDetect.browser;
iestring = "";
if (BrowserDetect.browser == "Explorer") {iestring = "_ie"};
xstring = iestring;
operastring = "false";
if (BrowserDetect.browser == "Opera") {operastring = "true"};

if (operastring == "true") {donothing=0;} else {mainLoadMenus(path,iestring,teacherID);}
link11 = "link11";
onMOver11 = "MM_showMenu(window.mm_menu_11,150,-2,null,"+link11+")";

link12 = "link12";
onMOver12 = "MM_showMenu(window.mm_menu_12,150,-2,null,"+link12+")";

link13 = "link13";
onMOver13 = "MM_showMenu(window.mm_menu_13,150,-2,null,"+link13+")";
if (!(xlevel)) {xlevel=1;}
// if (xlevel==1) {clevel="";} else {clevel=xlevel;}
if (xlevel==1) {clevel="";} else {clevel="";}

dlevel=xlevel-2;
bannerImage = "images/banner_photos"+moduleid+".jpg"
javaVoid="javascript:void(0);"

// document.write("<body onmousemove='overhere()'>");
document.write("<div id='frame'>");

document.write("<table width='760' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr><td colspan='2'>");

// ---- Banner - - - - - - - - - - - - - - - -  --

document.write("<div id='banner'>");

document.write("<table width='760' height='93' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr>");
document.write("<td width='202' height='93' aligh='center' id='greenBckgrnd2'>");
document.write("<a href='"+path+"index"+clevel+".html'>");
document.write("<img src='"+path+"images/main_logo.png' alt='Responsive Teaching in Science Home' width='202' height='93' border='0' />");
document.write("</a>");
document.write("</td>");

//document.write("<td width='16' height='93' valign='bottom'>");
//document.write("<img src='"+path+"images/cornerTab.gif' width='16' height='93' align='bottom' />");
//document.write("</td>");
document.write("<td width='535'>");
document.write("<div id='bannerRight'>");
document.write("<div id='bannerRightTop'>");
document.write("<img src='"+path+bannerImage+"' width='658' height='73' />");
document.write("</div>");
//document.write("<div id='bannerRightTitleTab'>"+title+iestring+"</div>");	
document.write("<div id='bannerRightTitleTab'>"+title+"</div>");	
document.write("</div>");	  
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");
	
document.write("<div id='colorBar'></div>");

document.write("</td></tr>");
document.write("<tr>");
document.write("<td id='contentleftBG' valign='top'>");

// -- ContentLeft column start - - - - - - - - - - - - - -  -->

document.write("<div id='contentleft'>");
document.write("<div id='sectionLinks'>");
document.write("<div id='aboveMenuBar'>	</div>");




document.write("<ul id='MenuBar1' class='MenuBarVertical'>");
document.write("<li><a href='"+path+"index"+clevel+".html'>Home</a></li>");
document.write("<li><a href='"+path+"project"+clevel+".html' alt='Responsive Teaching Project Description'>The Responsive<br />Teaching Project</a></li>");
document.write("<li><a href='"+path+"overview"+clevel+".html' alt='Responsive Teaching Overview' >Responsive Teaching</a>");
  document.write("</li>");
	document.write("<li><a href='#' alt='Responsive Curricula' class='MenuBarItemSubmenu'>Responsive<br />Curricula</a>");
    document.write("<ul>");
document.write("<li><a href='#' alt='Toy Cars' class='MenuBarItemSubmenu'>Toy Cars</a>");
    document.write("<ul>");
      document.write("<li><a href='"+path+"carmodule/index"+clevel+".html'>Toy Cars Home</a></li>");
      document.write("<li><a href='"+path+"carmodule/activities/act00/act00"+clevel+".html'>Launching Activity</a></li>");
      document.write("<li><a href='"+path+"carmodule/activityindex"+clevel+".html'>Menu of Follow-up<br />Activities</a></li>");
      document.write("<li><a href='"+path+"carmodule/trajectories"+clevel+".html'>Teacher Enacted<br />Trajectories</a></li>");
    document.write("</ul>");
  document.write("</li>");
	document.write("<li><a href='"+path+"modules/watercycle/watercycle"+clevel+".html' alt='Water Cycle'>Water Cycle </a></li>");
	document.write("<li><a href='"+path+"electric_circuits/electric_circuits"+clevel+".html'>Electric Circuits</a></li>");
    document.write("</ul>");
  document.write("</li>");
document.write("<li><a href='"+path+"frameworks"+clevel+".html' alt='A Responsive Teaching and the NGSS'><img src='"+path+"frameworks/ngss3_sm.png' height='30' width='29' hspace='36' vspace='8' align='right'>Responsive<br />Teaching<br />and the NGSS</a></li>");
document.write("<li><a href='#' alt='Professional Development' class='MenuBarItemSubmenu'>Professional<br />Development</a>");
    document.write("<ul>");
      document.write("<li><a href='"+path+"modules/watercycle/index"+clevel+".html'>PD Home</a></li>");
      document.write("<li><a href='"+path+"modules/watercycle/using_cs"+clevel+".html'>Discussing Case<br />Studies</a></li>");
      document.write("<li><a href='"+path+"toytops"+clevel+".html'>Productive Student<br />Ideas</a></li>");
      document.write("<li><a href='"+path+"modules/pd/smallcase"+clevel+".html'>Small Case Studies</a></li>");
      document.write("<li><a href='"+path+"modules/watercycle/bonnie/trajectory"+clevel+".html'>Extended Case Study</a></li>");
      document.write("<li><a href='"+path+"modules/pd/discussions"+clevel+".html'>Teacher Discussions</a></li>");
    document.write("</ul>");
  document.write("</li>");
document.write("<li><a href='#' alt='Responsive Teaching Toolbox' class='MenuBarItemSubmenu'>Responsive Teaching<br>Toolbox</a>");
    document.write("<ul >");
	document.write("<li><a href='"+path+"toolbox_ideas_merit"+clevel+".html' alt='How Do You Assess the Merit of Ideas?' style='font-size:90%'>How to Assess the<br>Scientific Merit of Ideas</a></li>");
	document.write("<li><a href='"+path+"toolbox_establish_norms"+clevel+".html' alt='How to Establish &amp; Maintain Classroom Norms' style='font-size:90%'>How to Establish &amp;<br>Maintain Classroom Norms</a></li>");
	document.write("<li><a href='"+path+"toolbox_manage_classroom"+clevel+".html' alt='How to Manage Classroom Activity' style='font-size:90%'>How to Manage<br>Classroom Activity</a></li>");
//	document.write("<li ><a href='"+javaVoid+"' alt='How to Establish and Maintain Classroom Norms' style='font-size:90%;color:#666'>How to Establish &amp;<br>Maintain Classroom Norms</a></li>");
//	document.write("<li ><a href='"+javaVoid+"' alt='How to Manage Classroom Activity' style='font-size:90%;color:#666'>How to Manage<br>Classroom Activity</a></li>");
    document.write("</ul>");
  document.write("</li>");
document.write("<li><a href='"+path+"suggested_reading"+clevel+".html' alt='Suggested Reading'>Suggested Reading</a></li>");
document.write("</ul>");

document.write("</div>");
//document.write("<div id='alerts'> <br />");
//document.write("</div>");
//document.write("<div id='contentleft2'>");
//document.write("<div id='sectionLinks2'>");
//document.write("<div id='aboveMenuBar'>	</div>");
//document.write("<div id='aboveMenuBar'>	</div>");
//document.write("<table width=175 border=0>");
//if (xlevel < 3) {document.write("<tr><td><a href='"+xfilename+".html'>Level 1</a></td><td><a href='"+xfilename+"2.html'>Level 2</a></td></tr>");}
//else {document.write("<tr><td><a href='"+xfilename+"3.html'>Level 1</a></td><td><a href='"+xfilename+"4.html'>Level 2</a></td></tr>");}
//if (xlevel==2 || xlevel==4) {document.write("<tr><td><a href='"+xfilename+"2.html'>Teacher</a></td><td><a href='"+xfilename+"4.html'>Facilitator</a></td></tr>");}
//else {document.write("<tr><td><a href='"+xfilename+".html'>Teacher</a></td><td><a href='"+xfilename+"3.html'>Facilitator</a></td></tr>");}
//document.write("</table>");
//document.write("<ul>");
//document.write("<li><a href='"+xfilename+".html'> Level 1   </a>|<a href='"+xfilename+"2.html'> Level 2 </a></li>");
//if (xlevel > 1) {document.write("<li><a href='"+xfilename+"2.html'>Teacher</a>    <a href='"+xfilename+"3.html'>Facilitator</a></li>");}
//document.write("</ul>");
//minipage = "<p><a href='#'>test</a></p>";
minipage = "";
if (minipage) {
	document.write("<table  width='167' align='center' border='0'style='color:#777;background-color:#fff;'><tr><td>");
	document.write(minipage);
	document.write("</td></tr></table>");
	}
document.write("<div id='aboveMenuBar'>	</div>");
//document.write("</div>");
document.write("</div>");

// -- End ContentLeft stuff --


// --  Contact publisher --

//else {
//document.write("<p>&nbsp;</p>");
//}


// -- End Contact Publisher --

document.write("</div>");
  
document.write("</div>");

document.write("</td>");
document.write("<td valign='top'>");

// Real End Content Left

document.write("<div id='contentcenter'>");

// a simple document.write to test "unbalanced tress" warnings in Mozilla. If including this command erases those warning messages, and if the tags are closed in "footerstuff", then the "trees" are balanced, despite the warnings.
// document.write("</div></td></tr></table></div>");
if (operastring == "true") {document.write("<p><span class='red'><strong>Warning:</span> This site has multiple issues when viewed in Opera. Please explore our site using Google Chrome, Firefox (Mozilla), or Safari instead.</strong></p>")}
if (iestring == "_ie") {document.write("<p><span class='red'><strong>Warning:</span> This site has multiple issues when viewed in Internet Explorer. We are working to fix these problems. For now, please explore our site using Google Chrome, Firefox (Mozilla), or Safari instead.</strong></p>")}

}


// -------- END headerStuff END --------
	


// Foot (bottom) of the web page--copyright notice and final end tags

function footerStuff(homepage)
{

//if (homepage) {document.write("<br />&nbsp;");} else {document.write("<br />&nbsp;");
//document.write("<FORM><INPUT TYPE='BUTTON' VALUE='Back' ONCLICK='history.go(-1)'></FORM>");document.write("<br />");}
//document.write("</div>")
document.write("<br clear='all' />");
// without this little <br /> NS6 and IE5PC do not stretch the frame div down 
// to encompass the content DIVs -->

document.write("</td></tr>");
document.write("<tr><td colspan='2'>");

// Bottom Bar Starts 

document.write("<div id='colorBar'>");
document.write("&copy; 2017 Learning Progressions Project. All rights reserved. This site was originally designed and implemented at San Diego State University, by Mike McKean, Sharon Bendall, and Fred Goldberg.");
// document.write("</div></div>");
document.write("</div>");

document.write("</td></tr>");
document.write("</table>");

document.write("<script language='Javascript' src='"+path+"wz_tooltip.js'></script>");
var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgRight:path+"SpryAssets/SpryMenuBarRightHover.gif"});
}





//---------TABLE CONTAINING CONTENT TABLES--------------

// Head of table containing two tables aligned horizontally

function twoTablesHead()
{
document.write("<table border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr><td valign='top'>");
}

// Head of table containing two tables aligned vertically

function twoTablesHeadV()
{
document.write("<table border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr><td valign='top'>");
}


// Center of row of table containing two or more content tables

function twoTablesCenter(path)
{
document.write("</td>");
document.write("<td>  ");
document.write("<img src='"+path+"images/spacer.gif' width='20' height='1' />");
document.write(" </td>");
document.write("<td valign='top'>");
}

// Center of row of table containing three content tables, with right side table spanning two rows of tables

function twoTablesCenter2(path)
{
document.write("</td>");
document.write("<td rowspan='3'>  ");
document.write("<img src='"+path+"images/spacer.gif' width='20' height='1' />");
document.write(" </td>");
document.write("<td valign='top' rowspan='3'>");
}


// New row of table containing more than two content tables

function twoTablesNewRow(path)
{
document.write("</td></tr>");
document.write("<tr><td colspan=3><img src='"+path+"images/spacer.gif' width='1' height='20' /></td></tr>");
document.write("<tr><td valign='top'>");
}

// New row of table containing two content tables vertically aligned (colspan = 1 implied)

function twoTablesNewRowV(path)
{
document.write("</td></tr>");
document.write("<tr><td><img src='"+path+"images/spacer.gif' width='1' height='20' /></td></tr>");
document.write("<tr><td valign='top'>");
}

// Foot (bottom) of table containing two or more content tables

function twoTablesFoot()
{
document.write("</td></tr></table>");
}
//------------------------------------------------------

//-----------------CONTENT TABLES-----------------------

// Head of content table, style 1 ("gray")

function tableOneHead(boxTitle)
{
document.write("<table width='200' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr><td>");
document.write("<div class='contentBoxTitle'>"+boxTitle+"</div>");
document.write("<div class='contentBox'>");
}

// Head of content table, style 2 ("orange" or "alert")

function tableTwoHead(boxTitle)
{
document.write("<table width='200' border='0' cellpadding='0' cellspacing='0'>");
document.write("<tr><td>");
document.write("<div class='alertBoxTitle'>"+boxTitle+"</div>");
document.write("<div class='alertBox'>");
}

// Foot (bottom) of content table, styles 1 and 2

function tableFoot()
{
document.write("</div></td></tr></table>");
}

//------------------------------------------------------

//---------Schedule-type Tables-------------------------

function scheduleHead(tableTitle,cyc,rationale) 
{
timeCol = "Estimated Time (min)";
if (cyc) {if (cyc == "cycle") {timeCol = "Estimated Class Time (min)";} }
document.write("<div>");
document.write("<table class='scheduleTableBox'><tr class='schedTopBottom'><td colspan='2'>");
document.write("<div class='scheduleBoxTitle'>"+tableTitle);
 if (rationale) {
	document.write("<br /><br />");
	document.write("<span class='rationaleSched'><a href='rationale.html'>Rationale</a>"); 
	document.write(": "+rationale+"</span>");
 }
document.write("</div></td><td>");
document.write("<div class='scheduleBoxTBR' align='center'><span class='smaller'>"+timeCol+"</span></div>");
document.write("</td></tr>");
}

function schedRowBeg(bgcolor,url,urlText,remText)
{
classid = "scheduleBox"; trclass = "sched0";
if (bgcolor=="white") {trclass = "sched0";}
if (bgcolor=="gray") {trclass = "sched1";}
document.write("<tr class='"+trclass+"'><td><div class='"+classid+"'><p>");
document.write("<a href='"+url+"'>"+urlText+"</a>"+remText);
document.write("</p></div></td><td><div class='"+classid+"'><p>");
}

function schedRowEnd(minutes)
{
atime = minutes;
classid = "scheduleBoxR"; 
document.write("</p></div></td><td><div class='"+classid+"' align='center'><p>");
document.write(atime);
document.write("</p></div></td></tr>");
}

function scheduleFoot(totalTime)
{
atime = totalTime;
document.write("<tr class='schedTopBottom'><td colspan='2'>");
document.write("<div class='scheduleBoxTitle' align='right'>Total:  </div>");
document.write("</td><td>");
document.write("<div class='scheduleBoxTBR' align='center'>"+atime+"</div>");
document.write("</td></tr>");
document.write("</table></div>");
}

//------------------------------------------------


//-------Target Ideas-like Tables------------------

function targetHead(code,idea,actheader,actno) 
{
document.write("<div>");
document.write("<table class='targetTableBox'><tr class='targetTopBottom'><td>");
document.write("<div class='targetBoxTitle'>"+code+"</div>");
document.write("</td><td>");
document.write("<div class='targetBoxTitle'>"+idea+"</div>");
document.write("</td>");
if (actheader) {
	document.write("<td colspan='"+actno+"'>");
	document.write("<div class='targetBoxTitle'>"+actheader+"</div>");
	document.write("</td>");
  }
document.write("</tr>");
}

function targetCategory (category,actno,acts,links)
{
document.write("<tr class='targetCatRow'><td colspan='2'>");
document.write("<div class='targetBoxCategory'>"+category+"</div>");
if (actno) {  if (actno > 0) {

for (i=0; i<actno; i++) {
	act0 = acts[i]; link0 = links[i];
	if (act0=="x") {document.write("<td class='targetX'></td>");}
	else {
	document.write("<td><div class='targetCellTop'>");
	document.write("<a href='"+link0+"'>"+act0+"</a>");
	document.write("</div></td>");
	}
  }
}  }
document.write("</tr>");
}

function targetRowBeg(bgcolor,code,equip)
{
classid = "targetBox"; classid0 = "targetBoxL"; trclass = "target0";
if (bgcolor=="white") {trclass = "target0";}
if (bgcolor=="gray") {trclass = "target1";}
if (equip) {classid = "targetBoxR";}
document.write("<tr class='"+trclass+"'><td><div class='"+classid0+"'><p>");
document.write(code);
document.write("</p></div></td><td><div class='"+classid+"'><p>");
}

function targetActs(actno,values,x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16)
{
//values = new Array[actno];
if (actno > 0) {values[0] = x0};
if (actno > 1) {values[1] = x1};
if (actno > 2) {values[2] = x2};
if (actno > 3) {values[3] = x3};
if (actno > 4) {values[4] = x4};
if (actno > 5) {values[5] = x5};
if (actno > 6) {values[6] = x6};
if (actno > 7) {values[7] = x7};
if (actno > 8) {values[8] = x8};
if (actno > 9) {values[9] = x9};
if (actno > 10) {values[10] = x10};
if (actno > 11) {values[11] = x11};
if (actno > 12) {values[12] = x12};
if (actno > 13) {values[13] = x13};
if (actno > 14) {values[14] = x14};
if (actno > 15) {values[15] = x15};
if (actno > 16) {values[16] = x16};
// document.write(values);
// return values;
}

function targetRowEnd(actno,values)
{
document.write("</p></div></td>");
if (actno) { if (actno > 0) {
for (i=0; i<actno; i++) {
	if (values[i] == "x") {document.write("<td class='targetX'></td>");}
	else {
	if (values[i] == 1) {xvalue="X";} else {if (values[i] == 2) {xvalue="H";} else {xvalue=" ";} }
	document.write("<td align='center'><div class='targetCell'>"+xvalue+"</div></td>");
	}
  }
}  }
document.write("</tr>");
}

function targetFoot()
{
document.write("</table></div>");
}






// ----- DreamWeaver Functions start here --------

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}

// Popup window function

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// ----- End DreamWeaver Functions -----

function breadCrumb(cyc,act,header2,lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) {

document.write("<div id='breadCrumb'>");
if (cyc == 99) { // anything in the top level
  if (act < 0) { // special case - home page
//  document.write ("<a href'index.html'>Home</a>")
  document.write ("Home")
  }
 else { // for other top level files
  document.write ("<a href='index.html'>Home</a>")
  if (lu1) { deepLinks(lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) } // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write (header2)
  }
 }
else if (cyc == 0) {
  document.write ("<a href='../index.html'>Home</a>")
  if (lu1) { deepLinks(lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) } // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write (header2)
 }
else if (cyc == 98) {
  document.write ("<a href='../index.html'>Home</a>")
  if (lu1) { deepLinks(lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) } // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write (header2)
 }
else if (act == 0) {  // cycle level
 document.write ("<a href='../index.html'>Home</a>")
  document.write ("<span class='style3'> > </span>")
 if (header2 == 'zz') { document.write ("Unit "+cyc); }   //  Unit Main Page
 else {document.write ("<a href='u"+cyc+".html'>Unit "+cyc+"</a>")
   if (lu1) { deepLinks(lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) } // for deeper links
  document.write ("<span class='style3'> > </span>")
   document.write (header2);   }
 }
else { // lesson level
 document.write ("<a href='file:///Macintosh HD/Users/iMac3/Sites/index.html'>Home</a>")
  document.write ("<span class='style3'> > </span>")
 document.write ("<a href='../u"+cyc+".html'>Unit "+cyc+"</a>")

 actno = act;
 actlabel= "Lesson "+actno;
 acthref="u"+cyc+"l"+actno+".html";
 if (act >= 1000) {
    hwrem = act%1000;
    actno = (act-hwrem)/1000;
    if (hwrem==0) {
       actlabel="Lesson "+actno+" Homework"; 
       acthref="u"+cyc+"l"+actno+"hw.html";  }
    else if (hwrem>0) {
       actlabel="Lesson "+actno+" Homework "+hwrem; 
       acthref="u"+cyc+"l"+actno+"hw"+hwrem+".html";  }
  }

  document.write ("<span class='style3'> > </span>")
 if (header2 == 'zz') { document.write (actlabel); }   //  Lesson Main Page
 else { document.write ("<a href='"+acthref+"'>"+actlabel+"</a>")
   if (lu1) { deepLinks(lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) } // for deeper links
  document.write ("<span class='style3'> > </span>")
   document.write (header2);     }
 }
document.write("</div>");
}


function deepLinks(lu1,lt1,lu2,lt2,lu3,lt3,lu4,lt4,lu5,lt5) {
if (lu1) { // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write ("<a href='"+lu1+"'>"+lt1+"</a>")
}
if (lu2) { // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write ("<a href='"+lu2+"'>"+lt2+"</a>")
}
if (lu3) { // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write ("<a href='"+lu3+"'>"+lt3+"</a>")
}
if (lu4) { // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write ("<a href='"+lu4+"'>"+lt4+"</a>")
}
if (lu5) { // for deeper links
  document.write ("<span class='style3'> > </span>")
  document.write ("<a href='"+lu5+"'>"+lt5+"</a>")
}
}

function subLinks(u1,t1,u2,t2,u3,t3,u4,t4,u5,t5,u6,t6,u7,t7,u8,t8,u9,t9,u10,t10,u11,t11,u12,t12,u13,t13,u14,t14,u15,t15,u16,t16,u17,t17) {
// creates the important links - assumes at least one link

document.write("<div id='subLinks'>");

if (u1) {document.write("<a href='"+u1+"'>");}
document.write (t1);
if (u1) {document.write("</a>");}
if (t2) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u2) {document.write("<a href='"+u2+"'>");}
if (t2) {document.write (t2);}
if (u2) {document.write("</a>");}
if (t3) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u3) {document.write("<a href='"+u3+"'>");}
if (t3) {document.write (t3);}
if (u3) {document.write("</a>");}
if (t4) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u4) {document.write("<a href='"+u4+"'>");}
if (t4) {document.write (t4);}
if (u4) {document.write("</a>");}
if (t5) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u5) {document.write("<a href='"+u5+"'>");}
if (t5) {document.write (t5);}
if (u5) {document.write("</a>");}
if (t6) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u6) {document.write("<a href='"+u6+"'>");}
if (t6) {document.write (t6);}
if (u6) {document.write("</a>");}
if (t7) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u7) {document.write("<a href='"+u7+"'>");}
if (t7) {document.write (t7);}
if (u7) {document.write("</a>");}
if (t8) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u8) {document.write("<a href='"+u8+"'>");}
if (t8) {document.write (t8);}
if (u8) {document.write("</a>");}
if (t9) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u9) {document.write("<a href='"+u9+"'>");}
if (t9) {document.write (t9);}
if (u9) {document.write("</a>");}
if (t10) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u10) {document.write("<a href='"+u10+"'>");}
if (t10) {document.write (t10);}
if (u10) {document.write("</a>");}
if (t11) {document.write ("<span class='style3'>&ensp;|&ensp;</span>"); }

if (u11) {document.write("<a href='"+u11+"'>");}
if (t11) {document.write (t11);}
if (u11) {document.write("</a>");}
if (t12) {document.write ("<span class='style3'> | </span>"); }

if (u12) {document.write("<a href='"+u12+"'>");}
if (t12) {document.write (t12);}
if (u12) {document.write("</a>");}
if (t13) {document.write ("<span class='style3'> | </span>"); }

if (u13) {document.write("<a href='"+u13+"'>");}
if (t13) {document.write (t13);}
if (u13) {document.write("</a>");}
if (t14) {document.write ("<span class='style3'> | </span>"); }

if (u14) {document.write("<a href='"+u14+"'>");}
if (t14) {document.write (t14);}
if (u14) {document.write("</a>");}
if (t15) {document.write ("<span class='style3'> | </span>"); }

if (u15) {document.write("<a href='"+u15+"'>");}
if (t15) {document.write (t15);}
if (u15) {document.write("</a>");}
if (t16) {document.write ("<span class='style3'> | </span>"); }

if (u16) {document.write("<a href='"+u16+"'>");}
if (t16) {document.write (t16);}
if (u16) {document.write("</a>");}
if (t17) {document.write ("<span class='style3'> | </span>"); }

if (u17) {document.write("<a href='"+u17+"'>");}
if (t17) {document.write (t17);}
if (u17) {document.write("</a>");}

document.write("</div>");
}

//



function cycleLoadMenus(fname) {
   nocycles = 6;
   maxacts = 8;
   maxparts = 4;
   actparts = new Array(nocycles);
   labels = new Array(nocycles);
   locations = new Array(nocycles);
   for (k=0; k<nocycles; k++) {
       actparts[k] = new Array(maxacts);
       labels[k] = new Array(maxacts*maxparts);
       locations[k] = new Array(maxacts*maxparts);      
   }
   actno = new Array(nocycles);

//
// Here: 0=no lesson; 1=lesson, no homework; 2=lesson + 1 homework; 3=lesson + 2 homeworks
// Thus: if actno[i] = 1230000, the cycle consists of Lesson 1, Lesson 2, Lesson 2 Homework,
// Lesson 3, Lesson 3 Homework 1, Lesson 3 Homework 2, and no Lessons 4-7.
//

   actno[0]=22223221;
   actno[1]=22212100;
   actno[2]=31220000;
   actno[3]=13320000;
   actno[4]=22221210;
   actno[5]=22122110;
   c1=1;
   c2=2;
   c3=3;
   c4=4;
   c5=5;
   c6=6;
   for (k=0; k<nocycles; k++) {
       actnos = actno[k];
       for (j=0; j<maxacts; j++) {
           power = maxacts - 1 -j;
           powerten = 1;
           for (m=1; m<=power; m++) {powerten=powerten*10;}
           remainder = actnos%powerten;
           actparts[k][j] = (actnos-remainder)/powerten; // % is a modulas operator--it divides and returns the remainder
           actnos = actnos - (actparts[k][j]*powerten);
       }
   }
   cycentries = new Array(nocycles); 
   for (k=0; k<nocycles; k++) {
       cycentry = 0;
       istart = -1;
       for (j=0; j<maxacts; j++) { 
           aparts = actparts[k][j];
           k1 = k + 1;
           if (aparts>0) {
              i0 = istart + 1;
              j1 = j + 1;
              labels[k][i0] = "Lesson " + j1;
              filename=fname
              if (fname=="cycle") {filename="u"+k1+"l"+j1;}
              locations[k][i0] = "u"+k1+"/l"+j1+"/"+filename+".html";
              if (aparts==2 && fname!="equipment") {
                i1 = i0 + 1;
                labels[k][i1] = "Lesson " + j1 + " Homework";
                filename=fname
                if (fname=="cycle") {filename="u"+k1+"l"+j1+"hw";}
                locations[k][i1] = "u"+k1+"/l"+j1+"hw/"+filename+".html";
              }
              else if (aparts==3 && fname!="equipment") {
                i1 = i0 + 1;
                i2 = i0 + 2;
                labels[k][i1] = "Lesson " + j1 + " Homework 1";
                labels[k][i2] = "Lesson " + j1 + " Homework 2";
                filename=fname
                if (fname=="cycle") {filename="u"+k1+"l"+j1+"hw1";}
                locations[k][i1] = "u"+k1+"/l"+j1+"hw1/"+filename+".html";
                if (fname=="cycle") {filename="u"+k1+"l"+j1+"hw2";}
                locations[k][i2] = "u"+k1+"/l"+j1+"hw2/"+filename+".html";
              }
           }
           if (fname=="equipment" && aparts>0) {istart=istart+1; cycentry=cycentry+1;} 
           else {istart=istart+aparts; cycentry = cycentry + aparts;}
      }
      cycentries[k] = cycentry;
   }

   a1 = cycentries[0];
   a2 = cycentries[1];
   a3 = cycentries[2];
   a4 = cycentries[3];
   a5 = cycentries[4];
   a6 = cycentries[5];

   if (window.mm_menu_01) return;
   window.mm_menu_01 = new Menu("root",140,15,"Arial, Helvetica, sans-serif",10,"#555555","#FCFAEF","#FCFAEF","#999288","left","middle",1,0,1000,-5,7,true,true,true,0,true,true);
   if (a1 > 0) { 
     for (i=-1; i<a1; i++) {
       i1=i;
       if (i1==-1) {
	  filename=fname;
          if (fname=="cycle") {filename="c1";}
          mm_menu_01.addMenuItem("Unit "+c1+" Overview","location='u1/"+filename+".html'");}
       else {
         label = labels[0][i1];
         locate = locations[0][i1];
         mm_menu_01.addMenuItem(label,"location='"+locate+"'");}
     } }
   mm_menu_01.hideOnMouseOut=true;
   mm_menu_01.bgColor='#CCCCCC';
   mm_menu_01.menuBorder=1;
   mm_menu_01.menuLiteBgColor='#FFFFFF';
   mm_menu_01.menuBorderBgColor='#CCCCCC';

   window.mm_menu_02 = new Menu("root",140,15,"Arial, Helvetica, sans-serif",10,"#555555","#FCFAEF","#FCFAEF","#999288","left","middle",1,0,1000,-5,7,true,true,true,0,true,true);
   if (a2 > 0) { 
     for (i=-1; i<a2; i++) {
       i1=i;
       if (i1==-1) {
	  filename=fname;
          if (fname=="cycle") {filename="c2";}
          mm_menu_02.addMenuItem("Unit "+c2+" Overview","location='u2/"+filename+".html'");}
       else {
         label = labels[1][i1];
         locate = locations[1][i1];
         mm_menu_02.addMenuItem(label,"location='"+locate+"'");}
      } }
   mm_menu_02.hideOnMouseOut=true;
   mm_menu_02.bgColor='#CCCCCC';
   mm_menu_02.menuBorder=1;
   mm_menu_02.menuLiteBgColor='#FFFFFF';
   mm_menu_02.menuBorderBgColor='#CCCCCC';


   window.mm_menu_03 = new Menu("root",140,15,"Arial, Helvetica, sans-serif",10,"#555555","#FCFAEF","#FCFAEF","#999288","left","middle",1,0,1000,-5,7,true,true,true,0,true,true);
   if (a3 > 0) { 
     for (i=-1; i<a3; i++) {
       i1=i;
       if (i1==-1) {
	  filename=fname;
          if (fname=="cycle") {filename="c3";}
          mm_menu_03.addMenuItem("Unit "+c3+" Overview","location='u3/"+filename+".html'");}
       else {
         label = labels[2][i1];
         locate = locations[2][i1];
         mm_menu_03.addMenuItem(label,"location='"+locate+"'");}
     } }
   mm_menu_03.hideOnMouseOut=true;
   mm_menu_03.bgColor='#CCCCCC';
   mm_menu_03.menuBorder=1;
   mm_menu_03.menuLiteBgColor='#FFFFFF';
   mm_menu_03.menuBorderBgColor='#CCCCCC';
   
   window.mm_menu_04 = new Menu("root",140,15,"Arial, Helvetica, sans-serif",10,"#555555","#FCFAEF","#FCFAEF","#999288","left","middle",1,0,1000,-5,7,true,true,true,0,true,true);
   if (a4 > 0) { 
     for (i=-1; i<a4; i++) {
       i1=i;
       if (i1==-1) {
	  filename=fname;
          if (fname=="cycle") {filename="c4";}
          mm_menu_04.addMenuItem("Unit "+c4+" Overview","location='u4/"+filename+".html'");}
       else {
         label = labels[3][i1];
         locate = locations[3][i1];
         mm_menu_04.addMenuItem(label,"location='"+locate+"'");}
     } }
   mm_menu_04.hideOnMouseOut=true;
   mm_menu_04.bgColor='#CCCCCC';
   mm_menu_04.menuBorder=1;
   mm_menu_04.menuLiteBgColor='#FFFFFF';
   mm_menu_04.menuBorderBgColor='#CCCCCC';

   window.mm_menu_05 = new Menu("root",140,15,"Arial, Helvetica, sans-serif",10,"#555555","#FCFAEF","#FCFAEF","#999288","left","middle",1,0,1000,-5,7,true,true,true,0,true,true);
   if (a5 > 0) { 
     for (i=-1; i<a5; i++) {
       i1=i;
       if (i1==-1) {
	  filename=fname;
          if (fname=="cycle") {filename="c5";}
          mm_menu_05.addMenuItem("Unit "+c5+" Overview","location='u5/"+filename+".html'");}
       else {
         label = labels[4][i1];
         locate = locations[4][i1];
         mm_menu_05.addMenuItem(label,"location='"+locate+"'");}
     } }
   mm_menu_05.hideOnMouseOut=true;
   mm_menu_05.bgColor='#CCCCCC';
   mm_menu_05.menuBorder=1;
   mm_menu_05.menuLiteBgColor='#FFFFFF';
   mm_menu_05.menuBorderBgColor='#CCCCCC';

   window.mm_menu_06 = new Menu("root",140,15,"Arial, Helvetica, sans-serif",10,"#555555","#FCFAEF","#FCFAEF","#999288","left","middle",1,0,1000,-5,7,true,true,true,0,true,true);
   if (a6 > 0) { 
     for (i=-1; i<a6; i++) {
       i1=i;
       if (i1==-1) {
	  filename=fname;
          if (fname=="cycle") {filename="c6";}
          mm_menu_06.addMenuItem("Unit "+c6+" Overview","location='u6/"+filename+".html'");}
       else {
         label = labels[5][i1];
         locate = locations[5][i1];
         mm_menu_06.addMenuItem(label,"location='"+locate+"'");}
     } }
   mm_menu_06.hideOnMouseOut=true;
   mm_menu_06.bgColor='#CCCCCC';
   mm_menu_06.menuBorder=1;
   mm_menu_06.menuLiteBgColor='#FFFFFF';
   mm_menu_06.menuBorderBgColor='#CCCCCC';

 

mm_menu_06.writeMenus();        

} 


function writeTitle(title,period,type) {

document.write("<h1>");
acttype = "";
if (type) {
	if (type == "l") {acttype = "Applications"};
	if (type == "d") {acttype = "Development"};
	if (type == "l") {acttype = "Learning About Learning"};
	if (type == "n") {acttype = "Nature of Science"};
	document.write("<span class='superTitle'>"+acttype+"</span><br />");
	}
document.write(title);
if (period) {
	document.write("<div class='gray'>"+period+"</div>");
	}
document.write("</h1>");
}

function openMovie(moviename,width,height) {
	xwidth=width+4; xheight=height+36;
    wdht = "width=" + xwidth + ",height=" + xheight;
    window.open(path+"movies/"+moviename,'MovieWindow',wdht);
}


function openMovie2(moviepath,width,height) {
// moviepath = the local pathway to the movie, plus the full movie name, including extension
	xwidth=width+4; xheight=height+36;
    wdht = "width=" + xwidth + ",height=" + xheight;
    window.open(moviepath,'MovieWindow',wdht);
}

function movieDiv(filenm,duration,size,width,height)  {
if (!(width)) {width=320;}
if (!(height)) {height=240;}
if (duration) {period=duration;} else {period="05:00";}
if (size) {sz=size;} else {sz="20.0";}
moviecall = "openMovie('"+filenm+"',"+width+","+height+");"
voidcall = "javascript: void(0)"
document.write("<p>");
document.write("<div class='movieBox'>");
document.write("<b><a href='"+voidcall+"' onClick="+moviecall+">Open Movie</a></b>      ");
document.write("<span class='smaller'>Duration: "+period+"   Size: "+sz+"</span>");
document.write("</div>");
document.write("</p>"); 

}

function movieImage(filenm,duration,size,width,height)  {
if (!(width)) {width=320;}
if (!(height)) {height=240;}
if (duration) {period=duration;} else {period="05:00";}
if (size) {sz=size;} else {sz="20.0";}
moviecall = "openMovie('"+filenm+"',"+width+","+height+");"
voidcall = "javascript: void(0)"
document.write("<p>");
document.write("<div class='movieBox'>");
document.write("<b><a href='"+voidcall+"' onClick="+moviecall+">Open Movie</a></b>      ");
document.write("<span class='smaller'>Duration: "+period+"   Size: "+sz+"</span>");
document.write("</div>");
document.write("</p>"); 

}

function optActDiv(unit,lesson,hw)  {

homework = ""; hwext = "";
if (hw==1) {homework = " Homework"; hwext ="_hw";}
filename1 ="../../optional_acts/u"+unit+"_act_"+lesson+hwext+".doc"; 
filename2 ="../../optional_acts/u"+unit+"_act_"+lesson+hwext+".pdf"; 
document.write("<p>");
document.write("<div class='movieBox'>");
document.write("<b>Download Lesson "+lesson+homework+":    <a href='"+filename2+"' >PDF</a>    <a href='"+filename1+"' >Word</a></b>    ");
document.write("<span class='smaller'>Right-click (PC) or control-click (Apple) to download.</span>");
document.write("</div>");
document.write("</p>"); 

}

function llink(label,fpath,filenm,clevel) {
	document.write("<a href='"+fpath+filenm+clevel+".html'>"+label+"</a>");
}

function llinkIE(label,fpath,filenm) {
var iestring 
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
// iestring="_"+BrowserDetect.browser;
iestring = "";
if (BrowserDetect.browser == "Explorer") {iestring = "_ie"};	
	document.write("<a href='"+fpath+filenm+iestring+".html'>"+label+"</a>");
}

function llinkbc(label,fpath,filenm,clevel) {
	document.write("<a href='"+fpath+filenm+clevel+".html'>"+label+"</a>");
	document.write("&nbsp;>&nbsp;");
}

function llinkbc2(label,fpath,filenm,clevel) {
	document.write("<a href='"+fpath+filenm+clevel+".html'>"+label+"</a>");
	document.write(" | ");
}

function llinkImage(imagenm,width,height,fpath,filenm,clevel) {
	document.write("<a href='"+fpath+filenm+clevel+".html'><img src='"+path+"images/"+imagenm+"' width="+width+" height="+height+" border=0></a>");
}

function mainLoadMenus(path,iestring,teacher)
{

//if (p) {path=p;} else {path="";}

color5="#FFF"; // color for text titles
// color6="#475169"; // background color
color6="#999288"; // background color

color7="#FFF"; // border color & hover text color
color8="#FFF"; // text color when mouse hovers--not used in function calls below
color9="#94AEC7"; // background color when mouse hovers
color10="#4A7EBB";
color11="#10253f";
color12="#cdcdcd";
color13="#ccc";
color14="#475169";
color15="#587B8C";
color16="#0033CC";
   c1=1;
   c2=2;
   c3=3;
   

var linksArray=new Array();
var linksTitle=new Array();
var path11=new Array();
var path11t=new Array();
var path12=new Array();
var path12t=new Array();
var path13=new Array();
var path13t=new Array();
var path21t=new Array();
var path21=new Array();
var path22t=new Array();
var path22=new Array();
var path23t=new Array();
var path23=new Array();
var path24t=new Array();
var path24=new Array();

var path99=new Array();
var path99t=new Array();
var numberLinks21 = 2;
var numberLinks22 = 2;
var numberLinks23 = 2;
var numberLinks24 = 2;

linksTitle[0]="<span class='menuSmall'>Exploring&nbsp;regular&nbsp;toy&nbsp;cars</span>";
linksArray[0]=path+"carmodule/activities/act10/examples/"
linksTitle[1]="<span class='menuSmall'>Ramps</span>";
linksArray[1]=path+"carmodule/activities/act11/examples/"
linksTitle[2]="<span class='menuSmall'>Rubber&nbsp;bands</span>";
linksArray[2]=path+"carmodule/activities/act12/examples/"
linksTitle[3]="<span class='menuSmall'>Fans</span>";
linksArray[3]=path+"carmodule/activities/act13/examples/"
linksTitle[4]="<span class='menuSmall'>Magnets</span>";
linksArray[4]=path+"carmodule/activities/act14/examples/"
linksTitle[11]="<span class='menuSmall'>Pullback&nbsp;car</span>";
linksArray[11]=path+"carmodule/activities/act21/examples/"
linksTitle[12]="<span class='menuSmall'>Windup&nbsp;car</span>";
linksArray[12]=path+"carmodule/activities/act22/examples/"
linksTitle[13]="<span class='menuSmall'>Propeller&nbsp;car</span>";
linksArray[13]=path+"carmodule/activities/act23/examples/"
linksTitle[14]="<span class='menuSmall'>Balloon&nbsp;car</span>";
linksArray[14]=path+"carmodule/activities/act24/examples/"
linksTitle[15]="<span class='menuSmall'>Battery&nbsp;car</span>";
linksArray[15]=path+"carmodule/activities/act25/examples/"
linksTitle[16]="<span class='menuSmall'>Solar&nbsp;car</span>";
linksArray[16]=path+"carmodule/activities/act26/examples/"

linksTitle[25]="<span class='menuSmall'>Energy</span>";
linksArray[25]=path+"carmodule/activities/act35/examples/"



path11t[0]="<em>Toy&nbsp;Cars</em>";
path11[0]=path+"carmodule/index.html";
//path11t[1]="<span class='grey2'>Using&nbsp;the&nbsp;Curriculum</span>";
//path11[1]=path+"carmodule/overview.html";
//path11[1]=""
path11t[1]="Launching&nbsp;Activity";
path11[1]=path+"carmodule/activities/act00/act00.html";
path11t[2]="Menu&nbsp;of&nbsp;Follow-up&nbsp;Activities";
path11[2]=path+"carmodule/activityindex.html";
path11t[3]="Teacher&nbsp;Enacted&nbsp;Trajectories";
path11[3]=path+"carmodule/trajectories.html";


path12t[0]="<em>Professional&nbsp;Development</em>";
path12[0]=path+"modules/watercycle/index.html";
path12t[1]="Discussing&nbsp;Case&nbsp;Studies";
path12[1]=path+"modules/watercycle/using_cs.html";
path12t[2]="Productive&nbsp;Student&nbsp;Ideas";
path12[2]=path+"toytops.html";
path12t[3]="Small&nbsp;Case&nbsp;Studies";
path12[3]=path+"modules/pd/smallcase.html";
path12t[4]="Extended&nbsp;Case&nbsp;Study";
path12[4]=path+"modules/watercycle/bonnie/trajectory"+iestring+".html";
path12t[5]="Teacher&nbsp;Discussions";
path12[5]=path+"modules/pd/discussions.html";

path13t[0]="<span style='font-size'>PD&nbsp;Sequence:</span>";
path13[0]=path+"modules/watercycle/index.html";
path13t[1]="<span style='font-size:90%'>Discussing&nbsp;Case&nbsp;Studies</span>";
path13[1]=path+"modules/watercycle/using_cs.html";
path13t[2]="<span style='font-size:90%'>Productive&nbsp;Student&nbsp;Ideas</span>";
path13[2]=path+"toytops.html";
path13t[3]="<span style='font-size:90%'>Small&nbsp;Case&nbsp;Studies</span>";
path13[3]=path+"modules/pd/smallcase.html";
path13t[4]="<span style='font-size:90%'>Extended&nbsp;Case&nbsp;Study</span>";
path13[4]=path+"modules/watercycle/bonnie/trajectory"+iestring+".html";
path13t[5]="<span style='font-size:90%'>Teacher&nbsp;Discussions</span>";
path13[5]=path+"modules/pd/discussions.html";
// Default values so Javascript doesn't crash in case of errors

path21t[0] = "Null"
path21[0] = "#";
path21t[1] = "Null"
path21[1] = "#";
path22t[0] = "Null"
path22[0] = "#";
path22t[1] = "Null"
path22[1] = "#";
path23t[0] = "Null"
path23[0] = "#";
path23t[1] = "Null"
path23[1] = "#";
path24t[0] = "Null"
path24[0] = "#";
path24t[1] = "Null"
path24[1] = "#";


if (teacher=="sharon1") {
	numberLinks21=4;
	numberLinks22=3;
//	numberLinks23=6;
	numberLinks23=1;
	numberLinks24=4;

path21t[0] = linksTitle[3];
path21[0] = linksArray[3]+"sharon_y1.html#";
path21t[1] = linksTitle[2];
path21[1] = linksArray[2]+"sharon_y1.html#";
path21t[2] = linksTitle[14];
path21[2] = linksArray[14]+"sharon_y1.html#";
path21t[3] = linksTitle[1];
path21[3] = linksArray[1]+"sharon_y1.html#";
	
path22t[0] = linksTitle[1];
path22[0] = linksArray[1]+"sharon_y1.html#";
path22t[1] = linksTitle[2];
path22[1] = linksArray[2]+"sharon_y1.html#";
path22t[2] = linksTitle[11];
path22[2] = linksArray[11]+"sharon_y1.html#";

path23t[2] = linksTitle[4];
path23[2] = linksArray[4]+"sharon_y1.html#";
path23t[1] = linksTitle[2];
path23[1] = linksArray[2]+"sharon_y1.html#";
path23t[0] = linksTitle[13];
path23[0] = linksArray[13]+"sharon_y1.html#";
path23t[3] = linksTitle[12];
path23[3] = linksArray[12]+"sharon_y1.html#";
path23t[4] = linksTitle[15];
path23[4] = linksArray[15]+"sharon_y1.html#";
path23t[5] = linksTitle[16];
path23[5] = linksArray[16]+"sharon_y1.html#";

path24t[0] = linksTitle[16];
path24[0] = linksArray[16]+"sharon_y1.html#";
path24t[1] = linksTitle[11];
path24[1] = linksArray[11]+"sharon_y1.html#";
path24t[2] = linksTitle[15];
path24[2] = linksArray[15]+"sharon_y1.html#";
path24t[3] = linksTitle[12];
path24[3] = linksArray[12]+"sharon_y1.html#";
	}

if (teacher=="carolyn2") {
	numberLinks21=2;
	numberLinks22=2;
	numberLinks23=2;

path21t[0] = linksTitle[1];
path21[0] = linksArray[1]+"carolyn_g2.html#";
path21t[1] = linksTitle[11];
path21[1] = linksArray[11]+"carolyn_g2.html#";
	
path22t[0] = linksTitle[1];
path22[0] = linksArray[1]+"carolyn_g2.html#";
path22t[1] = linksTitle[14];
path22[1] = linksArray[14]+"carolyn_g2.html#";

path23t[0] = linksTitle[1];
path23[0] = linksArray[1]+"carolyn_g2.html#";
path23t[1] = linksTitle[2];
path23[1] = linksArray[2]+"carolyn_g2.html#";
	}

if (teacher=="carolyn3") {
	numberLinks21=2;
	numberLinks22=2;
	numberLinks23=2;

path21t[0] = linksTitle[1];
path21[0] = linksArray[1]+"carolyn_g3.html#";
path21t[1] = linksTitle[11];
path21[1] = linksArray[11]+"carolyn_g3.html#";
	
path22t[0] = linksTitle[2];
path22[0] = linksArray[2]+"carolyn_g3.html#";
path22t[1] = linksTitle[1];
path22[1] = linksArray[1]+"carolyn_g3.html#";

path23t[0] = linksTitle[15];
path23[0] = linksArray[15]+"carolyn_g3.html#";
path23t[1] = linksTitle[16];
path23[1] = linksArray[16]+"carolyn_g3.html#";
	}





path99t[0]="";
path99[0]="";




   if (window.mm_menu_11) return;


window.mm_menu_11 = new Menu("root",220,23,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color5,color7,color6,color9,"left","middle",1,0,100,-5,7,true,true,true,0,true,true);
	mm_menu_11.addMenuItem(path11t[0],"location='"+path11[0]+"'");
	mm_menu_11.addMenuItem(path11t[1],"location='"+path11[1]+"'");
	mm_menu_11.addMenuItem(path11t[2],"location='"+path11[2]+"'");
	mm_menu_11.addMenuItem(path11t[3],"location='"+path11[3]+"'");
//	mm_menu_11.addMenuItem(path11t[4],"location='"+path11[4]+"'");
//	mm_menu_11.addMenuItem(path11t[5],"location='"+path11[5]+"'");
//	mm_menu_11.addMenuItem(path11t[6],"location='"+path11[6]+"'");
  mm_menu_11.hideOnMouseOut=true;
   mm_menu_11.bgColor=color7;
   mm_menu_11.menuBorder=1;
   mm_menu_11.menuLiteBgColor=color6;
   mm_menu_11.menuBorderBgColor=color7;

window.mm_menu_12 = new Menu("root",220,23,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color5,color7,color6,color9,"left","middle",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_12.addMenuItem(path12t[0],"location='"+path12[0]+"'");
	mm_menu_12.addMenuItem(path12t[1],"location='"+path12[1]+"'");
	mm_menu_12.addMenuItem(path12t[2],"location='"+path12[2]+"'");
 	mm_menu_12.addMenuItem(path12t[3],"location='"+path12[3]+"'");
	mm_menu_12.addMenuItem(path12t[4],"location='"+path12[4]+"'");
	mm_menu_12.addMenuItem(path12t[5],"location='"+path12[5]+"'");
//	mm_menu_12.addMenuItem(path12t[6],"location='"+path12[6]+"'");
  mm_menu_12.hideOnMouseOut=true;
   mm_menu_12.bgColor=color7;
   mm_menu_12.menuBorder=1;
   mm_menu_12.menuLiteBgColor=color6;
   mm_menu_12.menuBorderBgColor=color7;
   
window.mm_menu_13 = new Menu("root",220,20,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color5,color16,color9,color13,"left","middle",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_13.addMenuItem(path13t[0],"location='"+path13[0]+"'");
	mm_menu_13.addMenuItem(path13t[1],"location='"+path13[1]+"'");
	mm_menu_13.addMenuItem(path13t[2],"location='"+path13[2]+"'");
 	mm_menu_13.addMenuItem(path13t[3],"location='"+path13[3]+"'");
	mm_menu_13.addMenuItem(path13t[4],"location='"+path13[4]+"'");
	mm_menu_13.addMenuItem(path13t[5],"location='"+path13[5]+"'");
//	mm_menu_13.addMenuItem(path13t[6],"location='"+path13[6]+"'");
  mm_menu_13.hideOnMouseOut=true;
   mm_menu_13.bgColor=color7;
   mm_menu_13.menuBorder=1;
   mm_menu_13.menuLiteBgColor=color6;
   mm_menu_13.menuBorderBgColor=color7;
   
window.mm_menu_21 = new Menu("root",80,17,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color11,color7,color12,color11,"left","top",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_21.addMenuItem(path21t[0],"location='"+path21[0]+"'");
	if (numberLinks21>1) {mm_menu_21.addMenuItem(path21t[1],"location='"+path21[1]+"'");}
	if (numberLinks21>2) {mm_menu_21.addMenuItem(path21t[2],"location='"+path21[2]+"'");}
 	if (numberLinks21>3){mm_menu_21.addMenuItem(path21t[3],"location='"+path21[3]+"'");}
 	if (numberLinks21>4){mm_menu_21.addMenuItem(path21t[4],"location='"+path21[3]+"'");}
  mm_menu_21.hideOnMouseOut=true;
   mm_menu_21.bgColor=color7;
   mm_menu_21.menuBorder=1;
   mm_menu_21.menuLiteBgColor=color6;
   mm_menu_21.menuBorderBgColor=color7;

window.mm_menu_22 = new Menu("root",80,17,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color11,color7,color12,color11,"left","top",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_22.addMenuItem(path22t[0],"location='"+path22[0]+"'");
	if (numberLinks22>1) {mm_menu_22.addMenuItem(path22t[1],"location='"+path22[1]+"'");}
	if (numberLinks22>2){mm_menu_22.addMenuItem(path22t[2],"location='"+path22[2]+"'");}
if (numberLinks22>3){mm_menu_22.addMenuItem(path22t[3],"location='"+path22[3]+"'");}
if (numberLinks22>4){mm_menu_22.addMenuItem(path22t[4],"location='"+path22[4]+"'");}
  mm_menu_22.hideOnMouseOut=true;
   mm_menu_22.bgColor=color7;
   mm_menu_22.menuBorder=1;
   mm_menu_22.menuLiteBgColor=color6;
   mm_menu_22.menuBorderBgColor=color7;

window.mm_menu_23 = new Menu("root",80,17,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color11,color7,color12,color11,"left","top",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_23.addMenuItem(path23t[0],"location='"+path23[0]+"'");
	if (numberLinks23>1) {mm_menu_23.addMenuItem(path23t[1],"location='"+path23[1]+"'");}
	if (numberLinks23>2) {mm_menu_23.addMenuItem(path23t[2],"location='"+path23[2]+"'");}
	if (numberLinks23>3) {mm_menu_23.addMenuItem(path23t[3],"location='"+path23[3]+"'");}
	if (numberLinks23>4) {mm_menu_23.addMenuItem(path23t[4],"location='"+path23[4]+"'");}
	if (numberLinks23>5) {mm_menu_23.addMenuItem(path23t[5],"location='"+path23[5]+"'");}
  mm_menu_23.hideOnMouseOut=true;
   mm_menu_23.bgColor=color7;
   mm_menu_23.menuBorder=1;
   mm_menu_23.menuLiteBgColor=color6;
   mm_menu_23.menuBorderBgColor=color7;

window.mm_menu_24 = new Menu("root",80,17,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color11,color7,color12,color11,"left","top",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_24.addMenuItem(path24t[0],"location='"+path24[0]+"'");
	if (numberLinks24>1) {mm_menu_24.addMenuItem(path24t[1],"location='"+path24[1]+"'");}
	if (numberLinks24>2) {mm_menu_24.addMenuItem(path24t[2],"location='"+path24[2]+"'");}
	if (numberLinks24>3) {mm_menu_24.addMenuItem(path24t[3],"location='"+path24[3]+"'");}
	if (numberLinks24>4) {mm_menu_24.addMenuItem(path24t[4],"location='"+path24[4]+"'");}
  mm_menu_24.hideOnMouseOut=true;
   mm_menu_24.bgColor=color7;
   mm_menu_24.menuBorder=1;
   mm_menu_24.menuLiteBgColor=color6;
   mm_menu_24.menuBorderBgColor=color7;


   
window.mm_menu_99 = new Menu("root",175,23,"'Lucida Grande', 'Lucida Sans', Helvetica, Verdana, Arial, sans-serif",11,color5,color7,color6,color9,"left","middle",1,0,100,-5,7,true,true,true,0,true,true);
 	mm_menu_99.addMenuItem(path99t[0],"location='"+path99[0]+"'");
  mm_menu_99.hideOnMouseOut=true;
   mm_menu_99.bgColor=color7;
   mm_menu_99.menuBorder=1;
   mm_menu_99.menuLiteBgColor=color6;
   mm_menu_99.menuBorderBgColor=color7;
	

mm_menu_99.writeMenus();
}

function changetext(whichcontent){

if (document.all||document.getElementById){
cross_el=document.getElementById? document.getElementById("descriptions"):document.all.descriptions
cross_el.innerHTML=''+whichcontent+''
}
else if (document.layers){
document.d1.document.d2.document.write(''+whichcontent+'')
document.d1.document.d2.document.close()
}
}

function changetext2(whichcontent){

if (document.all||document.getElementById){
cross_el=document.getElementById? document.getElementById("descriptions2"):document.all.descriptions
cross_el.innerHTML=''+whichcontent+''
}
else if (document.layers){
document.d1.document.d2.document.write(''+whichcontent+'')
document.d1.document.d2.document.close()
}
}

function toggle_text(shown, hidden) {
       var e = document.getElementById(shown);
       var f = document.getElementById(hidden);
    if(e.style.display == 'inline') {
                  e.style.display = 'none';
                  f.style.display = 'inline';
      }
      else {
                  e.style.display = 'inline';
                  f.style.display = 'none';
      }
}
