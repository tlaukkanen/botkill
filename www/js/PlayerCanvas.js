/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 13.11.2014
 * Time: 1:13
 * To change this template use File | Settings | File Templates.
 */
define(function() {
        var TILE_SIZE = 144;
        var PLAYER_SIZE = 50;

        var ctx = document.getElementById("playercanvas").getContext("2d");
        var img = new Image();

        function findAngle(v1, v2) {
            var angle1 = Math.atan2(-v1.y, -v1.x);
            var angle2 = Math.atan2(-v2.y, v2.x);
            return angle1-angle2;
        }

        function drawPlayer(player, x, y) {
            // Calculate the angle between vectors 0,-1 and player velocity
            var v1 = {x:0, y:-1};
            var angle = findAngle(v1, player.velocity); // TODO: Should use looking direction instead of velocity
            ctx.save();
            ctx.shadowColor = '#101010';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 15;
            ctx.shadowOffsetY = 15;
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.drawImage(img, -PLAYER_SIZE/2, -PLAYER_SIZE/2);
            ctx.restore();
        }

        function drawName(player, x, y) {
            ctx.font = 'bold 20px Courier';
            ctx.fillStyle = 'black';
            ctx.fillText(player.name, x - ctx.measureText(player.name).width/2, y - PLAYER_SIZE/2 - 20);
        }

        function drawHealthBar(player, x, y) {
            ctx.fillStyle = "black";
            var x1 = x - player.maxHp/2 - 1;
            var y1 = y - PLAYER_SIZE/2 - 11;
            var width = player.maxHp + 2;
            var height = 12;
            ctx.fillRect(x1, y1, width, height);

            ctx.fillStyle = "red";
            x1 = x - player.maxHp/2;
            y1 = y - PLAYER_SIZE/2 - 10;
            width = player.maxHp;
            height = 10;
            ctx.fillRect(x1, y1, width, height);

            ctx.fillStyle = "green";
            x1 = x - player.maxHp/2;
            y1 = y - PLAYER_SIZE/2 - 10;
            width = player.currentHp;
            height = 10;
            ctx.fillRect(x1, y1, width, height);
        }

        return {
            init: function(callback) {
                img.src = "gfx/player.png";
                img.onload = callback;
                ctx.canvas.width  = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            },
            draw: function(players) {
                console.log("Drawing players...");

                for (i = 0; i < players.length; i++) {
                    var player = players[i];
                    var x = player.x * TILE_SIZE - PLAYER_SIZE/2;
                    var y = player.y * TILE_SIZE - PLAYER_SIZE/2;

                    drawPlayer(player, x, y);
                    drawName(player, x, y);
                    drawHealthBar(player, x, y);
                }
            }
        }
    }
);