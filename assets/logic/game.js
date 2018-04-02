$(function () {
    var mana = 0;
    var manaUp = 1;
    $('#manaUpButton').hide()
    $('#rituGrid').hide()
    $('#famiGrid').hide()
    $('#manaTotal').text(mana)
    $('#manaPer').text(manaUp)
    $('#manaButton')
        .on('click', function () {
            clearInterval(window.manaProgress)
            $('#manaBar').progress('reset')

            window.manaProgress = setInterval(function () {
                $('#manaBar').progress('increment', 20)
                if ($('#manaBar').progress('is complete')) {
                    clearInterval(window.manaProgress)
                    mana += manaUp
                    $('#manaTotal').text(mana)
                }
            }, 5)
            if (mana >= 20) {
                $('#rituGrid').show()
                $('#rituTotal').text(rituals)
            }
            if (mana >= 5) {
                $('#manaUpButton').show()
            }
        })
    $(document)
        .on('click', '#manaUpButton', function () {
            var manaCost = 5;
            $('#manaUpCost').text(manaCost)
            if (mana >= manaCost) {
                mana -= manaCost;
                $('#manaTotal').text(mana)
                manaUp++;
                $('#manaPer').text(manaUp)
            }
            if (manaUp == 5) {
                manaCost = 10;
            }
        })
    var rituals = 0
    var ritualUp = 1
    $('#rituButton')
        .on('click', function () {
            var manaCost = 10;
            if (mana >= manaCost) {
                mana -= manaCost
                $('#manaTotal').text(mana)
                clearInterval(window.rituProgress)
                $('#rituBar').progress('reset')

                window.rituProgress = setInterval(function () {
                    $('#rituBar').progress('increment', 10)
                    if ($('#rituBar').progress('is complete')) {
                        clearInterval(window.rituProgress)
                        rituals += ritualUp
                        $('#rituTotal').text(rituals)
                    }
                }, 10)
            }
            idlemana()
        })
    function idlemana() {
        var manaRate = rituals * .5
        window.manaInterval = setInterval(function () {
            mana = mana + manaRate
            $('#manaTotal').text(mana)
        }, 1000)
    }



})
