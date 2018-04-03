$(function () {
    function clearSave() {
        localStorage.setItem('mana', 0)
        localStorage.setItem('manaUp', 1)
        localStorage.setItem('manaStorage', 20)
        localStorage.setItem('manaRateCost', 5)
        localStorage.setItem('manaStorRituCost', 1)

        localStorage.setItem('rituals', 0)
        localStorage.setItem('ritualUp', 1)
        localStorage.setItem('ritualStorage', 10)
        localStorage.setItem('rituRateManaCost', 50)
        localStorage.setItem('rituRateFamiCost', 1)
        localStorage.setItem('rituStorFamiCost', 1)

        localStorage.setItem('familiars', 0)
        localStorage.setItem('famiUp', 1)
        localStorage.setItem('famiStorage', 5)
        localStorage.setItem('famiRateRituCost', 10)
        localStorage.setItem('famiStorManaCost', 200)
        window.location.reload()
    }

    var mana = localStorage.getItem('mana');
    if (mana === null) {
        mana = 0
    }
    var manaUp = localStorage.getItem('manaUp');
    if (manaUp === null) {
        manaUp = 1
    }
    var manaStorage = localStorage.getItem('manaStorage');
    if (manaStorage === null) {
        manaStorage = 20
    }
    $('#manaUpButton').hide()
    $('#manaStorageUp').hide()
    $('#rituGrid').hide()
    $('#famiGrid').hide()
    $('#rituUpButton').hide()
    $('#rituStorageUp').hide()
    $('#famiUpButton').hide()
    $('#famiStorButton').hide()
    $('#manaTotal').text(mana)
    $('#manaStorage').text(manaStorage)
    $('#manaPer').text(manaUp)
    $('#saveButton')
        .on('click', function () {
            localStorage.setItem('mana', mana)
            localStorage.setItem('manaUp', manaUp)
            localStorage.setItem('manaStorage', manaStorage)
            localStorage.setItem('manaRateCost', manaRateCost)
            localStorage.setItem('manaStorRituCost', manaStorRituCost)

            localStorage.setItem('rituals', rituals)
            localStorage.setItem('ritualUp', ritualUp)
            localStorage.setItem('ritualStorage', ritualStorage)
            localStorage.setItem('rituRateManaCost', rituRateManaCost)
            localStorage.setItem('rituRateFamiCost', rituRateFamiCost)
            localStorage.setItem('rituStorFamiCost', rituStorFamiCost)

            localStorage.setItem('familiars', familiars)
            localStorage.setItem('famiUp', famiUp)
            localStorage.setItem('famiStorage', famiStorage)
            localStorage.setItem('famiRateRituCost', famiRateRituCost)
            localStorage.setItem('famiStorManaCost', famiStorManaCost)
        })
    $('#clearSaveButton')
        .on('click', clearSave)
    $('#manaButton')
        .on('click', function () {
            clearInterval(window.manaProgress)
            $('#manaBar').progress('reset')
            if (mana < manaStorage) {
                window.manaProgress = setInterval(function () {
                    $('#manaBar').progress('increment', 20)
                    if ($('#manaBar').progress('is complete')) {
                        clearInterval(window.manaProgress)
                        mana = parseFloat(mana) + parseInt(manaUp)
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
    var manaRateCost = localStorage.getItem('manaRateCost');
    if (manaRateCost === null) {
        manaRateCost = 5
    }
    $('#manaUpButton')
        .on('click', function () {
            if (manaUp == manaRateCost) {
                manaRateCost += manaRateCost
                $('#manaUpCost').text(manaRateCost)
            }
            if (manaUp >= 5) {
                $('#rituGrid').show()
                $('#rituTotal').text(rituals)
                $('#rituStorage').text(ritualStorage)
            }
            if (mana >= manaRateCost) {
                mana -= manaRateCost;
                $('#manaTotal').text(mana)
                manaUp++;
                $('#manaPer').text(manaUp)
            }
        })

    var manaStorRituCost = localStorage.getItem('manaStorRituCost');
    if (manaStorRituCost === null) {
        manaStorRituCost = 1
    }
    $('#manaStorageUp')
        .on('click', function () {
            if (rituals >= manaStorRituCost) {
                rituals -= manaStorRituCost
                $('#rituTotal').text(rituals)
                if (manaStorRituCost == 1) {
                    manaStorRituCost += 4
                } else {
                    manaStorRituCost += 5;
                }
                manaStorage += manaStorage
                $('#manaStorage').text(manaStorage)
                $('#storageCost').text(manaStorRituCost)
            }
            if (manaStorage >= 40) {
                $('#famiGrid').show()
                $('#famiTotal').text(familiars)
                $('#famiStorage').text(famiStorage)
                $('#rituUpButton').show()
            }
            if (manaStorage >= 300) {
                $('#famiStorButton').show()
            }
            idlemana()
        })

    var rituals = localStorage.getItem('rituals');
    if (rituals === null) {
        rituals = 0
    }
    var ritualUp = localStorage.getItem('ritualUp');
    if (ritualUp === null) {
        ritualUp = 1
    }
    var ritualStorage = localStorage.getItem('ritualStorage');
    if (ritualStorage === null) {
        ritualStorage = 10
    }
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
    var rituRateManaCost = localStorage.getItem('rituRateManaCost');
    if (rituRateManaCost === null) {
        rituRateManaCost = 50
    }
    var rituRateFamiCost = localStorage.getItem('rituRateFamiCost');
    if (rituRateFamiCost === null) {
        rituRateFamiCost = 1
    }
    $('#rituUpButton')
        .on('click', function () {

            if (mana >= rituRateManaCost && familiars >= rituRateFamiCost) {
                mana -= rituRateManaCost
                $('#manaTotal').text(mana)
                familiars -= rituRateFamiCost
                $('#famiTotal').text(familiars)
                ritualUp++
                $('#rituPer').text(ritualUp)
                rituRateManaCost += 25
                $('#rituRateManaCost').text(rituRateManaCost)
                rituRateFamiCost++
                $('#rituRateFamiCost').text(rituRateFamiCost)
            }
            idleRitual()
        })
    var rituStorFamiCost = localStorage.getItem('rituStorFamiCost');
    if (rituStorFamiCost === null) {
        rituStorFamiCost = 1
    }
    $('#rituStorageUp')
        .on('click', function () {

            if (familiars >= rituStorFamiCost) {
                familiars -= rituStorFamiCost
                $('#famiTotal').text(familiars)
                rituStorFamiCost++
                $('#rituStorageFamiCost').text(rituStorFamiCost)
                ritualStorage += 10
                $('#rituStorage').text(ritualStorage)
                idleRitual()
            }
            if (ritualStorage >= 20) {
                $('#famiUpButton').show()
            }

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
    var familiars = localStorage.getItem('familiars');
    if (familiars === null) {
        familiars = 0
    }
    var famiUp = localStorage.getItem('famiUp');
    if (famiUp === null) {
        famiUp = 1
    }
    var famiStorage = localStorage.getItem('famiStorage');
    if (famiStorage === null) {
        famiStorage = 5
    }
    $('#famiButton')
        .on('click', function () {
            var manaCost = 100;
            var ritualCost = 5;
            if (mana >= manaCost && rituals >= ritualCost) {
                $('#rituStorageUp').show()
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
    var famiRateRituCost = localStorage.getItem('famiRateRituCost');
    if (famiRateRituCost === null) {
        famiRateRituCost = 10
    }
    $('#famiUpButton')
        .on('click', function () {
            if (rituals >= famiRateRituCost) {
                rituals -= famiRateRituCost
                $('#rituTotal').text(rituals)
                famiUp++
                $('#famiPer').text(famiUp)
                famiRateRituCost += 10
                $('#famiRateRituCost').text(famiRateRituCost)
                idlemana()
            }
        })
    var famiStorManaCost = localStorage.getItem('famiStorManaCost');
    if (famiStorManaCost === null) {
        famiStorManaCost = 200
    }
    $('#famiStorButton')
        .on('click', function () {
            if (mana >= famiStorManaCost) {
                mana -= famiStorManaCost
                $('#manaTotal').text(mana)
                famiStorage += 5
                $('#famiStorage').text(famiStorage)
                famiStorManaCost += 200
                $('#famiStorManaCost').text(famiStorManaCost)
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
