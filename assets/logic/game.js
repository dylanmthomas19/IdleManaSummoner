$(function () {
    var mana = 0;
    var manaUp = 1;
    var manaStorage = 20;
    $('#manaUpButton').hide()
    $('#manaStorageUp').hide()
    $('#rituGrid').hide()
    $('#famiGrid').hide()
    $('#rituUpButton').hide()
    $('#rituStorageUp').hide()
    $('#manaTotal').text(mana)
    $('#manaStorage').text(manaStorage)
    $('#manaPer').text(manaUp)
    $('#manaButton')
        .on('click', function () {
            clearInterval(window.manaProgress)
            $('#manaBar').progress('reset')
            if (mana < manaStorage) {
                window.manaProgress = setInterval(function () {
                    $('#manaBar').progress('increment', 20)
                    if ($('#manaBar').progress('is complete')) {
                        clearInterval(window.manaProgress)
                        mana += manaUp
                        if (mana > manaStorage) {
                            mana = manaStorage
                        }
                        $('#manaTotal').text(mana)
                    }
                }, 5)
            }
            if (mana >= 5) {
                $('#manaUpButton').show()
            }
        })
    $(document)
        .on('click', '#manaUpButton', function () {
            var manaCost = 5;
            if (manaUp >= 5) {
                manaCost = 10
                $('#rituGrid').show()
                $('#rituTotal').text(rituals)
                $('#rituStorage').text(ritualStorage)
            }
            if (manaUp >= 10) {
                manaCost = 20
            }
            $('#manaUpCost').text(manaCost)
            if (mana >= manaCost) {
                mana -= manaCost;
                $('#manaTotal').text(mana)
                manaUp++;
                $('#manaPer').text(manaUp)
            }
        })

    var rituCost = 1;
    $('#manaStorageUp')
        .on('click', function () {
            if (rituals >= rituCost) {
                rituals -= rituCost
                $('#rituTotal').text(rituals)
                if (rituCost == 1) {
                    rituCost += 4
                } else {
                    rituCost += 5;
                }
                manaStorage += manaStorage
                $('#manaStorage').text(manaStorage)
                $('#storageCost').text(rituCost)
            }
            if (manaStorage >= 40) {
                $('#famiGrid').show()
                $('#famiTotal').text(familiars)
                $('#famiStorage').text(famiStorage)
                $('#rituUpButton').show()
            }
        })

    var rituals = 0
    var ritualUp = 1
    var ritualStorage = 10
    $('#rituButton')
        .on('click', function () {
            var manaCost = 10;
            if (mana >= manaCost) {
                mana -= manaCost
                $('#manaTotal').text(mana)
                clearInterval(window.rituProgress)
                $('#rituBar').progress('reset')

                if (rituals < ritualStorage) {
                    window.rituProgress = setInterval(function () {
                        $('#rituBar').progress('increment', 10)
                        if ($('#rituBar').progress('is complete')) {
                            clearInterval(window.rituProgress)
                            rituals += ritualUp
                            if (rituals > ritualStorage) {
                                rituals = ritualStorage
                            }
                            $('#rituTotal').text(rituals)
                            idlemana()
                        }
                    }, 10)
                }
            }
            $('#manaStorageUp').show()

        })
    function idlemana() {
        clearInterval(window.manaInterval)
        var manaRate = rituals * .5
        window.manaInterval = setInterval(function () {
            if (mana < manaStorage) {
                mana += manaRate
                $('#manaTotal').text(mana)
            }
            if (mana > manaStorage) {
                mana = manaStorage
                $('#manaTotal').text(mana)
            }
        }, 500)
    }
    var familiars = 0;
    var famiUp = 1;
    var famiStorage = 5;
    $('#famiButton')
        .on('click', function () {
            $('#rituStorageUp').show()
            var manaCost = 100;
            var ritualCost = 5;
            if (mana >= manaCost && rituals >= ritualCost) {
                console.log("you did it")
                mana -= manaCost
                $('#manaTotal').text(mana)
                rituals -= ritualCost
                $('#rituTotal').text(rituals)
                clearInterval(window.famiProgress)
                $('#famiBar').progress('reset')

                if (familiars < famiStorage) {
                    window.famiProgress = setInterval(function () {
                        $('#famiBar').progress('increment', 5)
                        if ($('#famiBar').progress('is complete')) {
                            clearInterval(window.famiProgress)
                            familiars += famiUp
                            if (familiars > famiStorage) {
                                familiars = famiStorage
                            }
                            $('#famiTotal').text(familiars)
                            idleRitual()
                        }
                    }, 50)
                }
            }
        })
    function idleRitual() {
        clearInterval(window.rituInterval)
        var rituRate = familiars
        window.rituInterval = setInterval(function () {
            if (rituals < ritualStorage) {
                rituals += rituRate
                $('#rituTotal').text(rituals)
            }
            if (rituals > ritualStorage) {
                rituals = ritualStorage
                $('#rituTotal').text(rituals)
            }
            idlemana()
            }, 2000)
    }


})