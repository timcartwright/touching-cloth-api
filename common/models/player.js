'use strict';

module.exports = function(Player) {

    Player.observe('before save', function(ctx, next) {
        Player.count((err, count) => {
            ctx.instance.ladderRank = count + 1;
        });
        next();
      });
      
};
