$(function () {
    function saveGame() {
        localStorage.setItem('affinity', affinity)
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
        localStorage.setItem('affinity', affinity)
    }
    function clearSave() {
        localStorage.setItem('affinity', '')
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
    };
    function loadSave() {
        localStorage.getItem('affinity')
        localStorage.getItem(parseInt('mana'))
        localStorage.getItem(parseInt('manaUp'))
        if (manaUp > 1) {
            $('#manaUpButton').show()
            $('#manaUpCost').text(manaRateCost)
        }
        if (manaUp >= 5) {
            $('#rituGrid').show()
            $('#rituTotal').text(rituals)
            $('#rituStorage').text(ritualStorage)
        }
        localStorage.getItem(parseInt('manaStorage'))
        if (manaStorage >= 40) {
            $('#famiGrid').show()
            $('#famiTotal').text(familiars)
            $('#famiStorage').text(famiStorage)
        }
        if (manaStorage >= 200) {
            $('#famiStorButton').show()
            $('#famiStorManaCost').text(famiStorManaCost)
        }
        localStorage.getItem(parseInt('manaRateCost'))
        localStorage.getItem(parseInt('manaStorRituCost'))

        localStorage.getItem(parseInt('rituals'))
        if (rituals > 1) {
            $('#manaStorageUp').show()
            $('#storageCost').text(manaStorRituCost)
        }
        localStorage.getItem(parseInt('ritualUp'))
        localStorage.getItem(parseInt('ritualStorage', ))
        if (ritualStorage > 10) {
            $('#famiUpButton').show()
            $('#famiPer').text(famiUp)
            $('#famiRateRituCost').text(famiRateRituCost)
        }
        localStorage.getItem(parseInt('rituRateManaCost'))
        localStorage.getItem(parseInt('rituRateFamiCost'))
        localStorage.getItem(parseInt('rituStorFamiCost'))

        localStorage.getItem(parseInt('familiars'))
        if (familiars > 0) {
            $('#rituUpButton').show()
            $('#rituPer').text(ritualUp)
            $('#rituRateFamiCost').text(rituRateFamiCost)
            $('#rituRateManaCost').text(rituRateManaCost)
            $('#rituStorageUp').show()
            $('#rituStorageFamiCost').text(rituStorFamiCost)
        }
        localStorage.getItem(parseInt('famiUp'))
        localStorage.getItem(parseInt('famiStorage'))
        localStorage.getItem(parseInt('famiRateRituCost'))
        localStorage.getItem(parseInt('famiStorManaCost'))
        idleRitual()
    }
    var affinity = localStorage.getItem('affinity');
    if (affinity == null) {
        affinity = ''
    }
    var mana = parseInt(localStorage.getItem('mana'));
    if (mana === null) {
        mana = 0
    }
    var manaUp = parseInt(localStorage.getItem('manaUp'));
    if (manaUp === null) {
        manaUp = 1
    }
    var manaStorage = parseInt(localStorage.getItem('manaStorage'));
    if (manaStorage === null) {
        manaStorage = 20
    }
    $('#affinitySegment').hide()
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
        .on('click', saveGame)
    $("#loadSaveButton")
        .on('click', loadSave)
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
            $('#manaUpCost').text(manaRateCost)
        })

    var manaRateCost = parseInt(localStorage.getItem('manaRateCost'));
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

    var manaStorRituCost = parseInt(localStorage.getItem('manaStorRituCost'));
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
                $('#rituPer').text(ritualUp)
                $('#rituRateFamiCost').text(rituRateFamiCost)
                $('#rituRateManaCost').text(rituRateManaCost)
            }
            if (manaStorage >= 300) {
                $('#famiStorButton').show()
                $('#famiStorManaCost').text(famiStorManaCost)
            }
            idlemana()
        })

    var rituals = parseInt(localStorage.getItem('rituals'));
    if (rituals === null) {
        rituals = 0
    }
    var ritualUp = parseInt(localStorage.getItem('ritualUp'));
    if (ritualUp === null) {
        ritualUp = 1
    }
    var ritualStorage = parseInt(localStorage.getItem('ritualStorage'));
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
            $('#storageCost').text(manaStorRituCost)

        })
    var rituRateManaCost = parseInt(localStorage.getItem('rituRateManaCost'));
    if (rituRateManaCost === null) {
        rituRateManaCost = 50
    }
    var rituRateFamiCost = parseInt(localStorage.getItem('rituRateFamiCost'));
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
    var rituStorFamiCost = parseInt(localStorage.getItem('rituStorFamiCost'));
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
                $('#famiPer').text(famiUp)
                $('#famiRateRituCost').text(famiRateRituCost)
            }

        })
    var familiars = parseInt(localStorage.getItem('familiars'));
    if (familiars === null) {
        familiars = 0
    }
    var famiUp = parseInt(localStorage.getItem('famiUp'));
    if (famiUp === null) {
        famiUp = 1
    }
    var famiStorage = parseInt(localStorage.getItem('famiStorage'));
    if (famiStorage === null) {
        famiStorage = 5
    }
    $('#famiButton')
        .on('click', function () {
            var manaCost = 100;
            var ritualCost = 5;
            if (mana >= manaCost && rituals >= ritualCost) {
                $('#rituStorageUp').show()
                $('#rituStorageFamiCost').text(rituStorFamiCost)
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
    var famiRateRituCost = parseInt(localStorage.getItem('famiRateRituCost'));
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
    var famiStorManaCost = parseInt(localStorage.getItem('famiStorManaCost'));
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
            if (famiStorage >= 20 && affinity == '') {
                affinityQuiz()
            }
        })
    function affinityQuiz() {
        var GoodNEvil = 0;
        var LawNChaos = 0;
        $('#affinityIntro')
            .modal('show')
        $('#affinityGo')
            .on('click', function () {
                $('#q1')
                    .modal('show')
            })
        $('.q1a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'classical':
                        LawNChaos++
                        console.log(LawNChaos)
                        break;
                    case 'electronica':
                        switch (LawNChaos) {
                            case LawNChaos > 0:
                                LawNChaos--
                                break;
                            case LawNChaos == 0:
                                break;
                            case LawNChaos < 0:
                                LawNChaos++
                                break;
                        }
                        console.log(LawNChaos)
                        break;
                    case 'punk':
                        LawNChaos--
                        console.log(LawNChaos)
                        break;
                }
                $('#q2')
                    .modal('show')
            })
        $('.q2a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'justice':
                        GoodNEvil++
                        console.log(GoodNEvil)
                        break;
                    case 'change':
                        switch (GoodNEvil) {
                            case GoodNEvil > 0:
                                GoodNEvil--
                                break;
                            case GoodNEvil == 0:
                                break;
                            case GoodNEvil < 0:
                                GoodNEvil++
                                break;
                        }
                        console.log(GoodNEvil)
                        break;
                    case 'domination':
                        GoodNEvil--
                        console.log(GoodNEvil)
                        break;
                }
                $('#q3')
                    .modal('show')
            })
        $('.q3a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'mistakes':
                        GoodNEvil++
                        console.log(GoodNEvil)
                        break;
                    case 'past':
                        switch (GoodNEvil) {
                            case GoodNEvil > 0:
                                GoodNEvil--
                                break;
                            case GoodNEvil == 0:
                                break;
                            case GoodNEvil < 0:
                                GoodNEvil++
                                break;
                        }
                        console.log(GoodNEvil)
                        break;
                    case 'choices':
                        GoodNEvil--
                        console.log(GoodNEvil)
                        break;
                }
                $('#q4')
                    .modal('show')
            })
        $('.q4a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'family':
                        LawNChaos++
                        console.log(LawNChaos)
                        break;
                    case 'myself':
                        switch (LawNChaos) {
                            case LawNChaos > 0:
                                LawNChaos--
                                break;
                            case LawNChaos == 0:
                                break;
                            case LawNChaos < 0:
                                LawNChaos++
                                break;
                        }
                        console.log(LawNChaos)
                        break;
                    case 'noone':
                        LawNChaos--
                        console.log(LawNChaos)
                        break;
                }
                $('#q5')
                    .modal('show')
            })
        $('.q5a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'freeThem':
                        LawNChaos++
                        console.log(LawNChaos)
                        break;
                    case 'feedThem':
                        switch (LawNChaos) {
                            case LawNChaos > 0:
                                LawNChaos--
                                break;
                            case LawNChaos == 0:
                                break;
                            case LawNChaos < 0:
                                LawNChaos++
                                break;
                        }
                        console.log(LawNChaos)
                        break;
                    case 'leaveThem':
                        LawNChaos--
                        console.log(LawNChaos)
                        break;
                }
                $('#q6')
                    .modal('show')
            })
        $('.q6a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'guard':
                        GoodNEvil++
                        console.log(GoodNEvil)
                        break;
                    case 'ally':
                        switch (GoodNEvil) {
                            case GoodNEvil > 0:
                                GoodNEvil--
                                break;
                            case GoodNEvil == 0:
                                break;
                            case GoodNEvil < 0:
                                GoodNEvil++
                                break;
                        }
                        console.log(GoodNEvil)
                        break;
                    case 'lord':
                        GoodNEvil--
                        console.log(GoodNEvil)
                        break;
                }
                $('#q7')
                    .modal('show')
            })
        $('.q7a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'balance':
                        LawNChaos++
                        console.log(LawNChaos)
                        break;
                    case 'solitude':
                        switch (LawNChaos) {
                            case LawNChaos > 0:
                                LawNChaos--
                                break;
                            case LawNChaos == 0:
                                break;
                            case LawNChaos < 0:
                                LawNChaos++
                                break;
                        }
                        console.log(LawNChaos)
                        break;
                    case 'dont':
                        LawNChaos--
                        console.log(LawNChaos)
                        break;
                }
                $('#q8')
                    .modal('show')
            })
        $('.q8a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'family':
                        GoodNEvil++
                        console.log(GoodNEvil)
                        break;
                    case 'knowledge':
                        switch (GoodNEvil) {
                            case GoodNEvil > 0:
                                GoodNEvil--
                                break;
                            case GoodNEvil == 0:
                                break;
                            case GoodNEvil < 0:
                                GoodNEvil++
                                break;
                        }
                        console.log(GoodNEvil)
                        break;
                    case 'money':
                        GoodNEvil--
                        console.log(GoodNEvil)
                        break;
                }
                $('#q9')
                    .modal('show')
            })
        $('.q9a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'gold':
                        GoodNEvil++
                        console.log(GoodNEvil)
                        break;
                    case 'salt':
                        switch (GoodNEvil) {
                            case GoodNEvil > 0:
                                GoodNEvil--
                                break;
                            case GoodNEvil == 0:
                                break;
                            case GoodNEvil < 0:
                                GoodNEvil++
                                break;
                        }
                        console.log(GoodNEvil)
                        break;
                    case 'blood':
                        GoodNEvil--
                        console.log(GoodNEvil)
                        break;
                }
                $('#q10')
                    .modal('show')
            })
        $('.q10a')
            .on('click', function () {
                var dataVal = $(this).data('val')
                switch (dataVal) {
                    case 'life':
                        LawNChaos++
                        console.log(LawNChaos)
                        break;
                    case 'energy':
                        switch (LawNChaos) {
                            case LawNChaos > 0:
                                LawNChaos--
                                break;
                            case LawNChaos == 0:
                                break;
                            case LawNChaos < 0:
                                LawNChaos++
                                break;
                        }
                        console.log(LawNChaos)
                        break;
                    case 'power':
                        LawNChaos--
                        console.log(LawNChaos)
                        break;
                }
                var affinity1 = ''
                switch (LawNChaos) {
                    case LawNChaos > 1:
                        affinity1 = 'Lawful'
                        break;
                    case -1 <= LawNChaos <= 1:
                        affinity1 = 'Neutral'
                        break;
                    case LawNChaos < -1:
                        affinity1 = 'Chaotic'
                        break;
                }
                var affinity2 = ''
                switch (GoodNEvil) {
                    case GoodNEvil > 1:
                        affinity2 = 'Good'
                        break;
                    case -1 <= GoodNEvil <= 1:
                        affinity2 = 'Neutral'
                        break;
                    case GoodNEvil < -1:
                        affinity2 = 'Evil'
                        break;
                }
                affinity = affinity1 + ' ' + affinity2
                console.log(affinity1, affinity2)
            })


    }
    function idlemana() {
        clearInterval(window.manaInterval)
        var manaRate = rituals * 1.5
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
    function idleRitual() {
        clearInterval(window.rituInterval)
        var rituRate = familiars * .5
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
        }, 1000)

    }


})
