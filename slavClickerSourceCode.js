// GIT
// You've been save - Boinary
// -=-=-=-=-=-=-=-=-=-=-=-=-=
// Recommendations: Buy hats as upgrades for more Sq/sec, increasing by a power of 3, hat prices grow exponentially,
// Buy molotovs for +1 Sq/per click, Buy new bears as avatar at high price, 
// molotov prices grow constantly
//"SquatSlav2"
var bearUshanka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABsCAYAAACVWrdDAAAEC0lEQVR4Xu2dsU5VQRCGxd7Cys6C1pjQ+gK8ggXxDYiFodRKS2JhfANDiImJoaWCSklMIDEWt6Gws7KwV3OCmLsDnP/8d2bO3j33pyFkd2b3/t/OzO5yOKzdauzrw/7+n/kpfzk9dX2CzycnlP3R8fEaZQA6hzqLnNhNvgRgDJV7xhAAAQjNGqHOMtgwK/759uuLKaz/m8n5xfdXb58tPDVUI7w1YTIACvE74YMgCMDAXc+1q7+D4IwCARgIoMsxSkELZ9qbDYfWgE78y1x/CWL+Z08dmJ+djQjVgDl1/keA4RklfudWAJwnX2+QCoAAeNcQZ7+3s1nc/WztHhYO9nY2OYemN/L39fZGYfHx4KD4eTabubbyLmPXJx9oLAADhcrqJgBZyg70KwADhcrqZgE8uH+3GGrj6Xtq6LM3j4v+377/7LVXDTBFWACo9ebvrAjwa+jyIAAu+fzGywbg4e+z3g+1tXtIbe2pzn45eQ8CwGsWaiEAoXLyzgSA1yzUAgGwg9lzgd332/7sOQDVAOsf1YTma4AAhK73q84UAckCI/cCgBQKbreCX5NTQ0f0/j4BTaa5GiAACGlyuwAkC4zcCwBSKLgdCR483Ojuzn/8KsZ88e5TsfWvfg4QgNHXRDmgAAhAqgJLl4JePnlUPOezfu9OqgBe51ZA73ytv9FrgACURVkAQIgoArw5xGm/8gCiBWB5RI/fXA2IFkAAyF2QALBLBvRnd0ECsGQA0HSi9+lef3a+zdcAAUAKJKcgNLx3xWanPEXAyAev5lKQXSFoxWe3eyNKAJyEBMApoNdcALwKOu1XDoBTryvmbE2JFry5GiAA0QoYf+xVhHc6igABKBRo7iDGRgBa8dk5Hs1XACo/BCAAApD7WIpSUPBtKJtTa+d4tO+382v+sZTs62O0AFA7mp8AIAWd7QLgFNBrvnQA7NPQqGh6Bahtj2rS6ClIAMolIQDJIaIISBYYua8OYOp/AYMAoPb0FCQA/QgEAC3R5HYBSBYYuQ8HoJSDJE/ehgqAAHAKVO6tFNQ6ADbloMupynqkD2/fH+SOAAHgmAkAp1d4bwEIl5RzWB2AnS77+wB0ucXJkd87/WUdbA0QgOAXNglAfxQpAvKzTO8IzQFoPcdbGvYdcbZ99HMAqgECQIZsdA0QAAGgFEDb6PQUZGfLRkTtuyEkIKKBBEb27hogAOW+HgkeXoQFQADYRVf0n1wKYiMCCRC9K0IHIxfNBYzDa4AAcBQEwLzNnJPP31sApg5AKak/StIjQAAEwHVd7M/yArDaANDdEDoHsPfraDy0otH//UL2bHt6DUCCCACLjOwvAJVrgABUBkAGDN0dAWYdTq4GsAKw/QWAVSy4vwAEC8q6ax3AX5406rrzefpzAAAAAElFTkSuQmCC";
var bear = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABsCAYAAACVWrdDAAADnUlEQVR4Xu2dIXZUQRBFyQIQKBwCG4NlA9kCIoctoGJR2Ci2wIlgC9kAFoNF4FAIFgC6K+f8NzWv6vf0zMV2VXXPu11V3X9+hqtni/17uLv5t7Xk2/vHK+cjdcePa7MW63zQY327BeqODwBBHgCTBQKACeDY0naon9tjzr4EHSrksXYAEKegY4U91A8AADh0r5TZbZ774ywPdzebE9/eP6YWFuNdYgYAILVl6o0BUK9pKiIAUnIVG8eLUazhquar5WTjXVwPAIDaQs3jAGgWWIUHgFKoeTwCuH71YpjxzYevqRV8//xusP/x60/KPxq7PeHkvw8AgLU/fGcA+BpaEQBgyec7nzoAtyfQA8wmDIDJpyAAAMCv81sRVA+IvvFeEM/90d69B6hPr+4Jy/cAAKgtYI6TAaaArjsAXAWT/ge8GJWMuG3ufp+gFrNcDwCAQto8DoBmgVV4ACiFiseV4MXT7R7u5++/w5wfv3wbjv7T7wEA2H1PjBMCAACtCpxcCfr0/u3wotXrl89bBXCDRwHd9cZ4u/cAAIxNGQAiRcgAt4aY/hcPoFqALI/q+ZfrAdUCACB5CgJAdssI++wpCAAnBkAtp/qc7saL612+BwBAKdBcgtT07o7tLnlkwM4Xr+VKUNwhasd3j7sZBQCTEABMAV13ALgKmv4XB8DU64l7tqdUC75cDwBAtQIhXvZRhLscMgAAgwLLXcSyGaB2fHeNV+sFwOSXAAAAgN7XUihBxU9DszV1do1X5/64vuVfS+l+fKw2gBpX6wOAUtAcB4ApoOt+cgDi29CqaboCzPZXPWn3EgSAcUsAoDlFyIBmgVX46QDO/S9gFAA13l6CALCNAABqizaPA6BZYBW+HAAlR0nefAwFAAByCky2pgStDiBbctTDqcl6tE8ffz/IzgAA5JgBIKdXuTUAyiXNBZwOIC43+32AeriVk6Pfuv3HOrI9AADFP9gEgO0sIgP6q8zmDMsBWL3GRxrxN+Li+O73ANUDAJBM2eoeAAAApBRQx+j2EhRXm82I2c+GlICKhhJY+ds9AADjuV4JXt6EAQCA7KYb7M+uBGUzQglQfSpSFyOL5hHO5T0AADkKAAi/Zp6Tz7cGwLkDoCRtZ0l7BgAAANbjYr/KA+CyAahnQ+oekH2+ruZTO1r9v1/KPzve3gOUIADIIkvaA2ByDwDAZADJhEmbK8DZgGfXA7ICZO0BkFWs2B4AxYJmw60O4D9NmWi6X5/1twAAAABJRU5ErkJggg==";
//"SquatSlav"
var bearSquatUshanka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABsCAYAAACVWrdDAAAD7UlEQVR4Xu2cMWtUQRDHPXsLKzuLtCKk9QvkK1gEv4FYSEqttAwW4jeQEARB0qYylQaEBMQiTQo7Kwt7lSNGbucu93+TmXnvXvJLE8LuzOz+f7szu+9ebnJjZD/vd3f/zA75y9FRaAafDw9d9h8PDiYuA9E51VnmwC7yBYA+VF4SAwAASM0aqc4q2HhW/LPHr86GsPZvJKdnv1++eXrpoakaEa0JVwZAI/5U+CQIAOh46lm4+qcQgrsAAB0BTHMMKejSmfZiw641YCr+ea4/BzH7d6QOzI7O7ghqwIw6/3eA4Zkl/tQtAII33+gmBQAAomvIZ7+ztdE8+9nc3m8c7Gxt+Bya3srf15vrjcWHvb3m75OTk9BRPmQcmnlHYwB0FKqqGwCqlO3oFwAdharqZgHcu3u7CbX+5J0r9PHrh03/b99/LrWnBpgiDADXeot3ZgfENQx5AEBIvrjxqgG4//t46aQ2t/ddR3tX57icfg8A8GuWagGAVDn9zgDg1yzVQgGwwey9wJ77bX/vPUDVAOtf1YTR1wAApK73eWfsgGKBlXsAKIWS263gC3JqasTo5wlqMKOrAQBQSIvbAVAssHIPAKVQcrsSPDlc7+5Of/xqYj5/+6k5+g9+DwBA72uiDQgAAJQqsHIp6MWjB817Pmt3bpUKEHVuBYyO1/rrvQYAoC3KABBbhB0QzSFB+2sPIFsAL4/s+KOrAdkCAMB5CgKAd8mI/t5TEABWDIAaTvY5PerPjnf0NQAASoHiFKTCR1dsdcpjB/R88RpdCrIrRK346vbojgJAkBAAggJGzQEQVTBof+0ABPWaM/fWlGzBR1cDAJCtgPHnfRQRHQ47AACNAqO7iHl3gFrx1TlejRcAA78EAAAA1L6WQgpKfhrqzalD53h17rfjG/1rKdWPj9UCUO1qfABQCgbbARAUMGo+OAB7841OyNrbnKqKcHZ85U/VpPIUBIDlLx8DQC3hYDs7IChg1FwCWPCleEt3xVX/j5ao4F77CQC8kuX2B0Cunm5vAHBLlmswByDXPd6UAgBQChW3A6BYYOUeAEqh4nYAFAts3dvvDwIAAHpWYOBw7AAADKxAz+Hll3XwcK2WCABq9ZXeASAlqu0gAVR/ZFg7vdX3br8jzo54AoBaiACo1Vd6B4CUqLaDBJAd3nus9b7HoyaUPZ9qf+mvpQDAhwwAPr3SewMgXVKfw3QANrxKSdQAHzB3bwAsl4wd4F5SuQYAyNXT7a0cQHZN4B7gZtwaRGsCAAAQVKA1JwWlyul3Vg4gmnLslEhBTsgA4B7gXDL9dicF9av3XLRyAAPPb+XDA2BgRAAAwMAKDBz+L8KAhrqhiJ3fAAAAAElFTkSuQmCC";
var bearSquat = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABsCAYAAACVWrdDAAADf0lEQVR4Xu2cIXYUQRCG2QMgUDgENgbLBXIFRB5XQMWiYqO4Ai+CK+QCWAwWgUMhOADoruXNv7V/1fRM9ovtrqru/+uu6p6dzOHZzv4ebq//Lg355v7x4Eyp238cmzVYZ6Ln2nYL1O0fAII8ACYLBAATwLmp7VQ7t8Y8+RR0qpDn9gOAOAWdK+ypdgAAwKlrpazf4rk/Rnm4vV4MfHP/mBpY9HeJOwAAqSVT3xkA9ZqmPAIgJVdx53gxijlc5Xw1nKy/i6sBAFBLqLkdAM0CK/cAUAo1t0cAV69eDBHffPiSGsG3T++G/t9//k7Zx85uTdj87wEAsNaHbwwAX0PLAwAs+XzjrQNwawI1wCzCAJh8CgIAAPw8v+RB1YBoG+8F8dwf+7v3ADV7dU/YfQ0AgFoCZjs7wBTQNQeAq2DS/oQXo5Iel7u7vyeoweyuBgBAIW1uB0CzwMo9AJRCxe1K8OJwq7v78evPEPPj56/D0X/6PQAAq6+JMSAAANCqwOZS0N37t8OLVq9fPm8VwHUeBXTHG/2tXgMAMBZlAIgtwg5wc4hpf/EAqgXI8qiOv7saUC0AAJKnIABkl4zonz0FAWBjANRwqs/prr843t3XAAAoBZpTkArvrtjulMcOWPnitbsUFFeIWvHd7e6OAoBJCACmgK45AFwFTfuLA2DqdWSerSnVgu+uBgCgWoHgL/sowh0OOwAAgwK7u4hld4Ba8d05Xo0XAJNfAgAAAHpfSyEFFT8NzebU2Tlenfvj+Hb/Wkr342O1AFS7Gh8AlIJmOwBMAV3z6QDizdedULSPOVUV4er4yp+qSe0pCADLLx8DQC1hs50dYAromksA//ko3uKueOr/0eIKnrU/ACArWW1/ANTqmfYGgLRktQZHAGrd400pAAClUHM7AJoFVu4BoBRqbgdAs8DRffx+EAAAsLICk8OxAwAwWYGVw8uPdfBwrZcIAHr1ld4BICXq7SABdP9k2Du97XuP34iLIz4AoBciAHr1ld4BICXq7SABVIfPHmuz7/GoCVXPp9tf+WspAMghA0BOr/LeACiXNOewHEAMr1ISNSAHLN0bAMuSsQPSS6rWAAC1eqa9tQOorgncA9KMRwO3JgAAAKYCozkpqFTOvLN2AG7KiVMiBSUhA4B7QHLJrNudFLSu3kfR2gFMnt/mwwNgMiIAAGCyApPD/wNx5QS6y9Zv6QAAAABJRU5ErkJggg==";
//"SquatSlav3"
var uberSlavUshanka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABsCAYAAACVWrdDAAAECklEQVR4Xu2dMWtUQRSFs/YWVnYWaUVI6x/IX7AI/gOxkJRaaRksxH8gIQQESZvKVBoQEhCLbVLYWVnYqywxsnN3s+ed3DNv3+yeNGGZuXfuO9/MvTNvX15GG439vD84+DMd8pezs9QVfD49pew/npyMKAPQWepMGdh1vgygD5UXjGEABiDNGlJnNdgwM/75k9eXIWz+i+Ti8vert89uHBqqEdmasDIACvEnwosgGEDHXc/c2T+BkFwFBtARwCTHOAXdONNeb9i1BkzEv8r1VyCmP2fqwHR0cUW4Bkyp838FBJ4q8SduDSB58s0uUgMwgOwc4uz3d7eLez87e8eFg/3dbc5h6I38fb21VVh8ODoqPo/H49RWPmWcuvKOxgbQUaha3QyglrId/RpAR6FqdYsA7t+7Uwy19fSQGvr8zaOi/7fvPxfauwaEImwA1HzLd/YKyGuY8mAAKfnyxkMD8OD3+cKL2tk7prb2VOe8nLwHA+A1k1oYgFRO3pkB8JpJLRCAOFg8F8R9f+zPngNQDYj+UU1ovgYYgHS+zzrzCqgsMHJvAEghcXsUfE5OlY6Y/T4BBdNcDTAAhLRyuwFUFhi5NwCkkLgdCS4ernd3Fz9+FWO+ePep2Pov/RxgAL3PiXJAAzCAqgoMLgW9fPyweM5n8+7tqgJknUcBs/FGf73XAAMoi7IBgCXiFZDNIUn7tQegFoDloR6/uRqgFsAAyF2QAbBTBvRnd0EGMDAAKBz1Pj3rL8bbfA0wAKRA5RSEhs/O2Nopzyug54NXcykozhA042u3Z1eUASQJGUBSwKy5AWQVTNqvHYCkXjPmbE1RC95cDTAAtQLBH3srIhuOV4ABFAo0dxBjVwCa8bVzPIrXAJb8EIABGEDdx1KaS0FzXoZR9UkJ9S6o9t1LlNNRO4pvZABIwly7AeT0S1sbQFrCnAMaQG443hoVTd7jsCzQuWOmBvQdvgGEFyIZgFYBrwCtnrS3wQOgr2jFDJZeA1ZMT/pyDICWTGtgAFo9aW8GQEumNTAArZ60NwOgJdMaGIBWT9rb0gGwtyLQwYZWoGeD+P4gAzCA8g+XkR5eAUghsn3tUxCp14b67SboCws2vqH1l7+swwA4xAbA6SXvbQBySTmHcgBoeDZFtV4D0CYiviMu6id/CMsASokNAC3ZZLtXQFLArPngALAXpH5WlB0fCYj8oRSD7OU1AA0Y2w2AVUzc3wDEgrLuDIBVrOf+7LYWhYcORshe3b70GoAuyACQQpXbDaCywMi9ASCFem5fNSCDrwGRrwH0POMNYMmCG8DAAKBwsikK/d8vND7b3lwNQBdoAEihyu0GUFlg5N4AkELi9qzgMRzXABKQAZCCqbsbgFpR0l/rAP4CywG6uvkSCo4AAAAASUVORK5CYII=";
var uberSlav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABsCAYAAACVWrdDAAADmklEQVR4Xu2dIZIUQRBFmQMgUDgEFoPlAnsFxAZXQK1FYVdxBWIFV9gLYDFYBA6F2ANAIDuH6D85P7O7audhKzMr+7+qzKqdjubwZLJ/dzdXf9ZSvr69PziP1B0/5mYl6zzoub7dAnXHB4AgD4CdBQKACeDc0naqn9tjHn0JOlXIc+0AIE5B5wp7qh8AAHDqWimzWz33x1nubq5WJ76+vU8lFuNd4g4AQGrJ1BsDoF7TVEQApOQqNo4Xo1jDVc1X6WTjXVwPAIBaQs3jAGgWWIUHgFKoeTwCePXi2WLG1++/pDL49untwv77z98p/2js9oThfw8AgLU+fGcA+BpaEQBgyec7jw7A7Qn0ALMJA2DnUxAAAODX+bUIqgdE33gviOf+aO/eA9TTq3vC9D0AAGoJmOPsAFNA1x0AroJJ/xNejEpGXDd3f09QyUzXAwCgkDaPA6BZYBUeAEqh4nElePF0m4f78ethMeeHz18XR//d7wEA2HxNLCcEAABaFRiuBH1892bxotXL509bBXCDRwHdfGO8zXsAAJZNGQBii7AD3Bpi+l88gGoBsjyq55+uB1QLAIDkKQgA2SUj7LOnIAAMBkClU31Od+PFfKfvAQBQCjSXIDW9u2K7Sx47YOOL13QlKK4QteK7x90dBQCTEABMAV13ALgKmv4XB8DU68g921OqBZ+uBwCgWoEQL/unCDcddgAAFgpMdxHL7gC14rtrvMoXADu/BAAAAPS+ljJdCfrPxzBa35SoPgV1//VS1XQ1rvI7AEBJ6I0DwNPP9gaALaEXIA3Amy7vrZpmPuJYHurecdQDtk4fADt/ChgAAGjd9MOXoNannyD47j1gAo1aUwRAq7w6OAC0Rq0WAGiVVwcHgNao1QIArfLq4ADQGrVa7A4gexNWF5tWtQqCx+8HAaBA1EwIAGTUarAFQIOomZBHADLO/2yrv26ifrDI5jeaffnHOgCQQwyAnF7l1gAolzQXsByAmj5bombvAeoeE78RF/UrfwkLAEuJAaC2rDnODjAFdN2HA5B9oOp3RbPzKwFVPFVilH95D1ATxnEAZBUrtgdAsaDZcADIKraxffZYq9JTFyPlXz2+ew9QDwQApVDzOACaBVbhAaAU2nj8sQEZvgdEvgDYeMUDYGfBATAYAJWOW6LU//ul5s+OT9cD1AMCQCnUPA6AZoFVeAAohYrHXcFjOvSAJCAAJAWrNgdAtaLJeLMD+At6Zji6Pgt88QAAAABJRU5ErkJggg==";
//Ushanka
var ushanka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAA1klEQVRYR2NkQANrli//jyx05vx5dCUk8U+cPEmS+gMHDzIia0DhgCRGHUggPIdeCJISpTU5fRD/K0GD4R6EbplSRFI6Q1ZMKI0yEutAFMeBHEYlR9LGgaAggDmSwlCkmgNBbhr0UQxLazCHIvMpSYf40iTRaRAlBNGyBLUcBzIWPcpJciDZWZUEjUPPgSR4jiZKK8rKUOr+9Rs3otiDURfTxBV4DB11IKUhPhqCoyFIaQhQqn/IpcGOri78fRJKQ4RU/eghOOrA0RAkNQQoVT+aBmkdggDgMMel76vm6wAAAABJRU5ErkJggg==";
///
var notEnough;
var slavSquat;
var spaceText;
var buyUshankaText;
var text;
var tf = true;
var sizeScreen = 200;

var squatPerSecond = 0;

var ushankaHatTwo;
var ushankaHatThree;
var ushankaHatFour;
var ushankaHatFive;

var amountUshanka = 0;
var amountMolotov = 0;
var amountBearskin = 0;

var BEAR_WIDTH = getWidth()/2;
var BEAR_HEIGHT = getHeight()/2;

var slavX = getWidth()/2-BEAR_WIDTH/2;
var slavY = getHeight()/2-BEAR_HEIGHT/2;

var ushankaPrice = 100;
var ccc = 0;
var spaceCount = 0;
var count = 0;

var score = 0;
setSize(sizeScreen, sizeScreen);

//Adjustable variables. Change these to make the game easier or harder.

var costMultiplier = 2; //Controls the growth of ushanka prices
var ushankaIncrease = 1; //Controls how much the Squat/sec value increases by with each upgrade
var baseSquatPerSecond = 1; //Controls the initial Squat/sec value at the first upgrade

function start(){
    init();
}
function init(){
    slavSquat = new WebImage(bear);
    slavSquat.setSize(BEAR_WIDTH, BEAR_HEIGHT);
    slavSquat.setPosition(slavX, slavY);
    
    spaceText = new Text("Press Space to Squat","12pt Arial");
    spaceText.setColor(Color.black);
    spaceText.setPosition(0, 15);
    buyUshankaText = new Text("Press U for Ushanka", "12pt Arial");
    buyUshankaText.setColor(Color.black);
    buyUshankaText.setPosition(0, 30);
    if(tf == true){
        add(spaceText);
        add(buyUshankaText);
    }
    
    russianBackground();
    add(slavSquat);
    
    keyDownMethod(slav);
}
function slav(e){
    if(ccc >= 1){
        remove(text);
    }
    if(tf == true){
        spaceCount++;
    }
    if(spaceCount > 0){
        remove(spaceText);
        remove(buyUshankaText);
        tf = false;
    }
    if(e.keyCode == Keyboard.letter('U')){
        if(score >= ushankaPrice){
            // the exponential prices of ushankas; 100, 200, 400, 800, 1600. Should end at 1600.
            if(score >= ushankaPrice && amountUshanka == 0){
                amountUshanka = 1;
                upgradeOne();
            }else if(score >= ushankaPrice && amountUshanka == 1){
                amountUshanka = 2;
                upgradeTwo();
            }else if(score >= ushankaPrice && amountUshanka == 2){
                amountUshanka = 3;
                upgradeThree();
            }else if(score >= ushankaPrice && amountUshanka == 3){
                amountUshanka = 4;
                upgradeFour();
            }else if(score >= ushankaPrice && amountUshanka == 4){
                amountUshanka = 5;
                upgradeFive();
            }
            score -= ushankaPrice;
            ushankaPrice *= costMultiplier;
            upgradeText();
            ccc++;
            println("The next ushanka costs " + ushankaPrice + " squats.");
            if (squatPerSecond == 1){
                setTimer(addSquats, 1000);
            }
        }else{
            notEnough = new Text("Not enough Squats!", "12pt Arial");
            notEnough.setPosition(0, 15);
            notEnough.setColor(Color.black);
            removeAll();
            init();
            if(amountUshanka == 1){
                upgradeOne();
            }else if(amountUshanka == 2){
                upgradeOne();
                upgradeTwo();
            }else if(amountUshanka == 3){
                upgradeOne();
                upgradeTwo();
                upgradeThree();
            }else if(amountUshanka == 4){
                upgradeOne();
                upgradeTwo();
                upgradeThree();
                upgradeFour();
            }else if(amountUshanka == 5){
                upgradeOne();
                upgradeTwo();
                upgradeThree();
                upgradeFour();
                upgradeFive();
            }
            add(notEnough);
        }
    }else if(e.keyCode == Keyboard.SPACE){
        remove(notEnough);
        remove(slavSquat);
        if(count == 0){
            slavSquat = new WebImage(bearSquat);
            slavSquat.setSize(BEAR_WIDTH, BEAR_HEIGHT);
            slavSquat.setPosition(slavX, slavY);
            add(slavSquat);
            count++;
            score++;
            println(score);
        }else if(count == 1){
            slavSquat = new WebImage(bear);
            slavSquat.setSize(BEAR_WIDTH, BEAR_HEIGHT);
            slavSquat.setPosition(slavX, slavY);
            add(slavSquat);
            count++;
            score++;
            println(score);
        }else if(count == 2){
        slavSquat = new WebImage(uberSlav);
        slavSquat.setSize(BEAR_WIDTH, BEAR_HEIGHT);
        slavSquat.setPosition(slavX, slavY);
        add(slavSquat);
        count++;
        score++;
        println(score);
        }else if(count == 3){
            slavSquat = new WebImage(bear);
                slavSquat.setSize(BEAR_WIDTH, BEAR_HEIGHT);
                slavSquat.setPosition(slavX, slavY);
                add(slavSquat);
                count = 0;
                score++;
                println(score);
        }
    }
    //In its current state, the following section causes a weird third leg to appear when a key other than space or U is pressed. Is this supposed to happen?
    
    /*else{
        slavSquat = new WebImage(bear);
        slavSquat.setSize(BEAR_WIDTH, BEAR_HEIGHT);
        slavSquat.setPosition(slavX, slavY);
        add(slavSquat);
    }*/
}
function upgradeOne(){
    bear = bearUshanka;
    bearSquat = bearSquatUshanka;
    uberSlav = uberSlavUshanka;
    
    squatPerSecond = baseSquatPerSecond;
}
function upgradeTwo(){
    ushankaHatTwo = new WebImage(ushanka);
    ushankaHatTwo.setPosition(getWidth()/2-ushankaHatTwo.getWidth(), 39);
    ushankaHatTwo.setSize(40,30);
    add(ushankaHatTwo);
    
    squatPerSecond += ushankaIncrease;
}
function upgradeThree(){
    ushankaHatThree = new WebImage(ushanka);
    ushankaHatThree.setPosition(getWidth()/2-ushankaHatThree.getWidth()-7, 25.5);
    ushankaHatThree.setSize(40,30);
    add(ushankaHatThree);
    
    squatPerSecond += ushankaIncrease;
}
function upgradeFour(){
    ushankaHatFour = new WebImage(ushanka);
    ushankaHatFour.setPosition(getWidth()/2-ushankaHatFour.getWidth(), 15.5);
    ushankaHatFour.setSize(40,30);
    add(ushankaHatFour);
    
    squatPerSecond += ushankaIncrease;
}
function upgradeFive(){
    ushankaHatFive = new WebImage(ushanka);
    ushankaHatFive.setPosition(getWidth()/2-ushankaHatFive.getWidth()-7, 5.5);
    ushankaHatFive.setSize(40,30);
    add(ushankaHatFive);
    
    squatPerSecond += ushankaIncrease;
}
function addSquats(){
    score += squatPerSecond;
    println(score + " + " + squatPerSecond);
}
function russianBackground(){
    var red = new Rectangle(getWidth(), getHeight()/3);
    red.setPosition(0, getHeight()-red.getHeight());
    red.setColor(Color.red);
    add(red);
    
    var blue = new Rectangle(getWidth(), getHeight()/3);
    blue.setPosition(0, getHeight()-blue.getHeight()*2);
    blue.setColor(Color.blue);
    add(blue);
}
function upgradeText(){
    text = new Text("Upgrade!", "12pt Arial");
    text.setPosition(getWidth()-text.getWidth(), 15);
    text.setColor(Color.orange);
    add(text);
    // Random position within white part of russian flag
    // (Randomizer.nextInt(0, getWidth()-text.getWidth()), Randomizer.nextInt(0, getHeight()/3-text.getHeight()));
}
