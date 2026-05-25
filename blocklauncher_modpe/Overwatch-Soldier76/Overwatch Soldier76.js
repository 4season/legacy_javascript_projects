/**
*
*  _  _
* | || |  ___  ___  __ _ ___  ___  _ __
* | || |_/ __|/ _ \/ _` / __|/ _ \| '_ \
* |__   _\__ \  __/ (_| \__ \ (_) | | | |
*    |_| |___/\___|\__,_|___/\___/|_| |_|                                       *
*
*
* Overwatch Soldier76 Script
* @author 4season
* @since 2016.7.26
* @version 1.0
*/


/** IMPORT **/
var sdcard = android.os.Environment.getExternalStorageDirectory();
var File = java.io.File;
var directory = new File(sdcard.getAbsolutePath()+"/games/com.mojang");
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var bbR = Renderer.createHumanoidRenderer();
var Window0 = new android.widget.PopupWindow();
var Window1 = new android.widget.PopupWindow();
var Window2 = new android.widget.PopupWindow();
var Window3 = new android.widget.PopupWindow();
var Window4 = new android.widget.PopupWindow();
var Window5 = new android.widget.PopupWindow();
var BBR = bbR.renderType;
var btnWindow = new Array();
var num = 0;
var height;
var width;


/** DIP **/
function dip2px(ctx, dips) {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}


/** FUNCTION **/
function dip2px(ctx, dips)  {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}


function player() {
var Mplayer=new android.media.MediaPlayer();
Mplayer.reset();
Mplayer.setDataSource("/sdcard/games/com.mojang/minecraftpe/mp3/Soldier76.mp3");
Mplayer.prepare();
Mplayer.start();
}


function newLevel()  {
Guiexist0();
clientMessage("Overwatch / Ver.Soldier76");
clientMessage("Copyright is FourSeason All Rights Reserved.");
var Mplayer2=new android.media.MediaPlayer();
Mplayer2.reset();
Mplayer2.setDataSource("/sdcard/games/com.mojang/minecraftpe/mp3/Soldier76 - all soldiers now.mp3");
Mplayer2.prepare();
Mplayer2.start();
}


function Guiexist0()  {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
 try
  {
   if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/GUI/GUI0.png").exists())
   {
    var imageView1=new android.widget.ImageView(ctx);
    var bitmap1=new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/GUI/GUI0.png");
    imageView1.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    imageView1.setImageBitmap(bitmap1);
   }
  else
 {
 clientMessage("Where is the GUI0?");
 }
  imageView1.setOnClickListener(new android.view.View.OnClickListener({
  onClick: function(viewarg)
{
  SattingUI();
}}));
  Window0.setContentView(imageView1);
  Window0.setWidth(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getWidth()/30));
  Window0.setHeight(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getHeight()/20));
  Window0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Window0.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 530, 5);
 }
  catch(err)
  {
   clientMessage(""+err);
  }
 }}))
}


function SattingUI() {
  ctx.runOnUiThread(new java.lang.Runnable({run: function(){
    try{
      var layout = new android.widget.LinearLayout(ctx);
      layout.setOrientation(1);

      var text = new android.widget.TextView(ctx);
      text.setGravity(android.view.Gravity.CENTER);
      text.setText("\n\nOverwatch\nSoldier76");
      text.setTextSize(20);
      text.setTextColor(android.graphics.Color.YELLOW);
      layout.addView(text)

      var button0 = new android.widget.Button(ctx);
      layout.addView(button0)
      button0.setText("ImageMod");
      button0.setTextColor(android.graphics.Color.WHITE);
      button0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color. argb (200,0,0,0)));
      button0.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg)
        {
          Guiexist2();
          Guiexist3();
          Guiexist4();
          Guiexist5();
        }}));
        button0.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
          if(p2.getAction()==0){
          isjs=true;
           button0.setText("[ImageMod]"); }
          if(p2.getAction()==1){
          isjs=false;
           button0.setText("ImageMod"); }
          return false;
        }});
      var button1 = new android.widget.Button(ctx);
      layout.addView(button1)
      button1.setText("ButtonMod");
      button1.setTextColor(android.graphics.Color.WHITE);
      button1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color. argb (200,0,0,0)));
      button1.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg)
        {
          print("Next update...");
        }}));
        button1.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
          if(p2.getAction()==0){
          isjs=true;
           button1.setText("[ButtonMod]"); }
          if(p2.getAction()==1){
          isjs=false;
           button1.setText("ButtonMod"); }
          return false;
        }});
      var button2 = new android.widget.Button(ctx);
      layout.addView(button2)
      button2.setText("AllImgeRemove");
      button2.setTextColor(android.graphics.Color.WHITE);
      button2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color. argb (200,0,0,0)));
      button2.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg)
        {
          Window1.dismiss();
          Window2.dismiss();
          Window3.dismiss();
          Window4.dismiss();
          Window5.dismiss();
        }}));
        button2.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
          if(p2.getAction()==0){
          isjs=true;
           button2.setText("[AllImgeRemove]"); }
          if(p2.getAction()==1){
          isjs=false;
           button2.setText("AllImgeRemove"); }
          return false;
        }});
      var button3 = new android.widget.Button(ctx);
      layout.addView(button3)
      button3.setText("Go back");
      button3.setTextColor(android.graphics.Color.WHITE);
      button3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color. argb (200,0,0,0)));
      button3.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg)
        {
          WindowS.dismiss();
        }}));
        button3.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
          if(p2.getAction()==0){
          isjs=true;
           button3.setText("[Go back]"); }
          if(p2.getAction()==1){
          isjs=false;
           button3.setText("Go back"); }
          return false;
        }});
      var scr = new android.widget.ScrollView( ctx );
      scr.addView(layout);
      WindowS=new android.widget.PopupWindow(scr, ctx.getWindowManager().getDefaultDisplay().getWidth()/2.5, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
      WindowS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)));
      WindowS.setOutsideTouchable(false);
      WindowS.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 200);
    }
    catch(err)
    {
      print(""+err);
    }
  }}));
}



function Guiexist1()  {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
 try
  {
   if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/GUI/GUI1.png").exists())
   {
    var imageView1=new android.widget.ImageView(ctx);
    var bitmap1=new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/GUI/GUI1.png");
    imageView1.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    imageView1.setImageBitmap(bitmap1);
   }
  else
 {
 clientMessage("Where is the GUI1?");
 }
  Window1.setContentView(imageView1);
  Window1.setTouchable(false);
  Window1.setWidth(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getWidth()/4));
  Window1.setHeight(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getHeight()/4));
  Window1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Window1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
 }
  catch(err)
  {
   clientMessage(""+err);
  }
 }}))
}


function Guiexist2()  {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
 try
  {
   if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/GUI/GUI2.png").exists())
   {
    var imageView1=new android.widget.ImageView(ctx);
    var bitmap1=new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/GUI/GUI2.png");
    imageView1.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    imageView1.setImageBitmap(bitmap1);
   }
  else
 {
 clientMessage("Where is the GUI2?");
 }
  Window2.setContentView(imageView1);
  Window2.setWidth(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getWidth()/35));
  Window2.setHeight(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getHeight()/35));
  Window2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Window2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT,350,5);
 }
  catch(err)
  {
   clientMessage(""+err);
  }
 }}));
}


function Guiexist3()  {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
 try
  {
   if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/GUI/GUI3.png").exists())
   {
    var imageView1=new android.widget.ImageView(ctx);
    var bitmap1=new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/GUI/GUI3.png");
    imageView1.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    imageView1.setImageBitmap(bitmap1);
   }
  else
 {
 clientMessage("Where is the GUI3?");
 }
  Window3.setContentView(imageView1);
  Window3.setWidth(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getWidth()/35));
  Window3.setHeight(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getHeight()/35));
  Window3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Window3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT,220,5);
 }
  catch(err)
  {
   clientMessage(""+err);
  }
 }}));
}


function Guiexist4()  {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
 try
  {
   if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/GUI/GUI4.png").exists())
   {
    var imageView1=new android.widget.ImageView(ctx);
    var bitmap1=new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/GUI/GUI4.png");
    imageView1.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    imageView1.setImageBitmap(bitmap1);
   }
  else
 {
 clientMessage("Whwere is the GUI4?");
 }
  imageView1.setOnTouchListener(new android.view.View.OnTouchListener({onTouch:function(p1,p2){
    var Mplayer3=new android.media.MediaPlayer();
    imageView1.setClickable(true);
          if(p2.getAction()==0){
           Mplayer3.reset();
           Mplayer3.setDataSource("/sdcard/games/com.mojang/minecraftpe/mp3/Soldier76.mp3");
           Mplayer3.prepare();
           Mplayer3.start();
           print("1"); }
          if(p2.getAction()==1){
           Mplayer3.stop();
           print("2");}
          return false;
        }}));
  Window4.setContentView(imageView1);
  Window4.setWidth(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getWidth()/25));
  Window4.setHeight(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getHeight()/25));
  Window4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Window4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT,5,5);
 }
  catch(err)
  {
   clientMessage(""+err);
  }
 }}));
}


function Guiexist5()  {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
 try
  {
   if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/GUI/GUI5.png").exists())
   {
    var imageView1 = new android.widget.ImageView(ctx);
    var bitmap1 = new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/GUI/GUI5.png");
    imageView1.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    imageView1.setImageBitmap(bitmap1);
   }
  else
 {
 clientMessage("Whwere is the GUI5?");
 }
  Window5.setContentView(imageView1);
  Window5.setTouchable(false);
  Window5.setWidth(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getWidth()/25));
  Window5.setHeight(dip2px(ctx,ctx.getWindowManager().getDefaultDisplay().getHeight()/15));
  Window5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Window5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT,5,5);
 }
  catch(err)
  {
   clientMessage(""+err);
  }
 }}));
}


function leaveGame()  {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    Window0.dismiss();
    Window1.dismiss();
    Window2.dismiss();
    Window3.dismiss();
    Window4.dismiss();
    Window5.dismiss();
  }}));
}
