

/*
Script made by 4season
and, 4season in newLevel Group
*/



//var ctx is mainactivity
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();


//var modpe and android
var arrow;
var time = 0;
var gas = 0;
var bar = 0;
var w = new android.widget.PopupWindow();
var w2 = new android.widget.PopupWindow();
var w3 = new android.widget.PopupWindow();
var px = Math.floor(getPlayerX());
var py = Math.floor(getPlayerY());
var pz = Math.floor(getPlayerZ());
var yaw = Math.floor(getYaw());
var pitch = Math.floor(getPitch());
var sin = -Math.sin(yaw/180*Math.PI);
var cos = Math.cos(yaw/180*Math.PI);
var tan = -Math.sin(pitch/180*Math.PI);
var pcos = Math.cos(pitch/180*Math.PI);


//var bitmap is cut for minecraft png file
var guiFile = new android.graphics.BitmapFactory.decodeStream( ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png") );
var newButtonImage = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 8, 32, 8, 8 ), dips( 13 ), dips( 13 ), false );
var newButtonImage2 = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 0, 32, 8, 8 ), dips( 13 ), dips( 13 ), false );


//ninepatch
function createNinePatch( bitmap, x, y, xx, yy) {
 var NO_COLOR = 0x00000001;
 var buffer = java.nio.ByteBuffer.allocate(84).order(java.nio.ByteOrder.nativeOrder());
 buffer.put(0x01);
 buffer.put(0x02);
 buffer.put(0x02); 
 buffer.put(0x09);
 buffer.putInt(0); 
 buffer.putInt(0); 
 buffer.putInt(0);
 buffer.putInt(0);
 buffer.putInt(0); 
 buffer.putInt(0);
 buffer.putInt(0);
 buffer.putInt(y); 
 buffer.putInt(yy);
 buffer.putInt(x); 
 buffer.putInt(xx); 
 buffer.putInt(NO_COLOR);
 buffer.putInt(NO_COLOR); 
 buffer.putInt(NO_COLOR);
 buffer.putInt(NO_COLOR); 
 buffer.putInt(NO_COLOR);
 buffer.putInt(NO_COLOR); 
 buffer.putInt(NO_COLOR);
 buffer.putInt(NO_COLOR); 
 buffer.putInt(NO_COLOR);
 var drawable = new android.graphics.drawable.NinePatchDrawable(ctx.getResources(), bitmap, buffer.array(), new android.graphics.Rect(), null);
 return drawable;
}


//newLevel colback function
function newLevel() {
  Item.defineArmor(504, "empty_armor_slot_leggings", 0, "입체기동장치", "images/chain.png", 1, 10, ArmorType.leggings);  //addAmor masode
  ModPE.setItem(500,"sword",0,"가스");  //addItem
  ModPE.setItem(501,"sword",1,"칼날");
  ModPE.setItem(502,"sword",0,"반안도신");
  ModPE.setItem(503,"sword",2,"입체기동");
  Player.addItemCreativeInv(500,1,1);  //addcreativitem
  Player.addItemCreativeInv(504,1,1);
  ModPE.readData(gas);
}


//LevelGame
function leaveGaame() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		w.dismiss();
		w2.dismiss();
		w3.dismiss();
		ModPE.saveData(gas);
	}
}));
}


function procCmd(cmd) {
	if(cmd=="gas")
	{
		addItemInventory(500,1);
	}
}


//useItem is touch for gas
function useItem(x,y,z,i,b) {
	if(i===500&&gas<25000)
	{
		gas += 12500;
		toast("gas +12500");
	} else
	if(gas>25000)
	{
		gas = 25000;
		toast("gas is full");
	}
	if(i===504)
	{
		Player.setArmorSlot(2,504,0);
    Entity.setCarriedItem(Player.getEntity(),504, Player.getCarriedItemCount()-1, 0);
	}
}


//modTick is sot to arrow
function modTick() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(arrow)
		{
			Level.addParticle(ParticleType.cloud,Entity.getX(arrow),Entity.getY(arrow),Entity.getZ(arrow),1,1,1,5);
			ModPE.showTipMessage("\n\n\n\ntime:"+time+"/150"+"\ngas:"+gas+"/25000");
		}
		if(time>0&&gas>0)
		{
			time--;
			gas--;
			pp=getPlayerEnt()
			var x=Entity.getX(arrow)-Player.getX();
			var y=Entity.getY(arrow)-Player.getY();
			var z=Entity.getZ(arrow)-Player.getZ();
			Entity.setVelX(pp,x*0.12);
			Entity.setVelY(pp,y*0.12);
			Entity.setVelZ(pp,z*0.12);
		}
		if(Player.getArmorSlot(2)==504&&bar==0)
		{
			bar = 1;
			button()
			button2()
			button3()
		} else
		if(Player.getArmorSlot(2)!=504&&bar==1)
		{
			bar = 0;
	    w.dismiss();
      w2.dismiss();
      w3.dismiss();
		}
	}}));
}


//dip2px is android for button
function dip2px( ctx,dips ) {
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}


/*
function dips( dips ) {
	return Math.ceil( dips * ctx.getResources().getDisplayMetrics().density );
}
*/

//toast
function toast(msg) {
	ctx.runOnUiThread(new java.lang.Runnable({run: function(){
android.widget.Toast.makeText(ctx, msg, android.widget.Toast.LENGTH_SHORT).show();
}}));
}


//button
function button() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try
		{
			var l = new android.widget.LinearLayout(ctx);
      var b = new android.widget.Button(ctx);
      b.setText("↑");
      b.setTextSize(8);
      b.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
      b.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg)
				{
					if(gas<1)
					{
						Entity.remove(arrow);
						toast("The gas is low");
					}
					arrow=Level.spawnMob(px+3*sin*pcos, py+5.5*tan*pcos, pz+2*cos*pcos,80,"mob/arrow.png");
					setVelX(arrow,5*sin);
					setVelY(arrow,5*tan);
					setVelZ(arrow,5*cos);
				}
			}));
			b.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
				if(p2.getAction()==0)
				{
					isjs=true;
					b.setTextColor(android.graphics.Color.rgb(251,248,75));
					b.setBackgroundDrawable(createNinePatch(newButtonImage2 , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
				  }
					if(p2.getAction()==1)
					{
						isjs=false;
						b.setTextColor(android.graphics.Color.WHITE);
						b.setBackgroundDrawable(createNinePatch(newButtonImage , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
					}
						return false;
					}
				});
				l.addView(b);
				w.setContentView(l);
				w.setWidth(dip2px(ctx, 30));
				w.setHeight(dip2px(ctx, 30));
				w.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,100,5);
			}
			catch(error)
			{
				errorAlert(error);
			}
		}
	}));
}


//button2
function button2() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try
		{
			var l = new android.widget.LinearLayout(ctx);
      var b = new android.widget.Button(ctx);
      b.setText("△");
			b.setTextSize(8);
			b.setBackgroundDrawable(createNinePatch(newButtonImage , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
			b.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg)
				{
					if(gas<1)
					{
						time=0;
					}
					time=150;
				}
			}));
			b.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
				if(p2.getAction()==0)
				{
					isjs=true;
					b.setTextColor(android.graphics.Color.rgb(251,248,75));
					b.setBackgroundDrawable(createNinePatch(newButtonImage2 , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
				  }
					if(p2.getAction()==1)
					{
						isjs=false;
						b.setTextColor(android.graphics.Color.WHITE);
						b.setBackgroundDrawable(createNinePatch(newButtonImage , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
					}
						return false;
					}
				});
				l.addView(b);
				w2.setContentView(l);
				w2.setWidth(dip2px(ctx, 30));
				w2.setHeight(dip2px(ctx, 30));
				w2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,10,5);
			}
			catch(error)
			{
				errorAlert(error);
			}
		}
	}));
}


//button3
function button3() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try
		{
			var l = new android.widget.LinearLayout(ctx);
			var b = new android.widget.Button(ctx);
			b.setText("×");
			b.setTextSize(8);
			b.setBackgroundDrawable(createNinePatch(newButtonImage , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
			b.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg)
				{
					time = 0;
					Entity.remove(arrow);
				}
			}));
			b.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
				if(p2.getAction()==0)
				{
					isjs=true;
					b.setTextColor(android.graphics.Color.rgb(251,248,75));
					b.setBackgroundDrawable(createNinePatch(newButtonImage2 , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
				  }
					if(p2.getAction()==1)
					{
						isjs=false;
						b.setTextColor(android.graphics.Color.WHITE);
						b.setBackgroundDrawable(createNinePatch(newButtonImage , dip2px( 3 ),dip2px( 3 ),dip2px( 6 ),dip2px( 6 ) ));
					}
						return false;
					}
				});
				l.addView(b);
				w3.setContentView(l);
				w3.setWidth(dip2px(ctx, 30));
				w3.setHeight(dip2px(ctx, 30));
				w3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,10,80);
			}
			catch(error)
			{
				errorAlert(error);
			}
		}
	}));
}

//by Planp
function errorAlert(e) {
  thiz.runOnUiThread(new java.lang.Runnable(
    {
     run : function()
    {
     try
    {
     var dialog = new AlertDialog.Builder(thiz);
     dialog.setTitle("Error!");
     var str = "Error!\n - "+e.name+"\n - #"+(e.l             ineNumber+1)+"\n\n"+e.message;
   dialog.setMessage(str);
   dialog.show();
  }
  catch(e) 
{ 
print(e); 
}
}
}));
}