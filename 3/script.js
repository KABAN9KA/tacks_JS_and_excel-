Highcharts.chart('container', {
    chart: {
        type: 'tilemap',
        inverted: false,
         height: '100%',


    },

    accessibility: {

        screenReaderSection: {
            beforeChartFormat:
                '<h5>{chartTitle}</h5>' +
                '<div>{chartLongdesc}</div>'
                // '<div>{viewTableButton}</div>'
        },
        point: {
            valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
        }
    },

    title: {
        text: 'карта через Highcharts maps '
    },

    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 1000000,
            color: '#f4ce4f',
            name: '< 1M'
        }, {
            from: 1000000,
            to: 5000000,
            color: '#64b147' ,
            name: '1M - 5M'
        },  {
            from: 20000000,
            color: '#e95e61',
            name: '> 20M'
        }]
    },

    tooltip: {
        headerFormat: '',
        pointFormat: ' <b> {point.name}</b>'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                color: '#000000',
                style: {
                    textOutline: false
                }
            }
        }
    },

    series: [{
        name: '',
        data: [{
            'hc-a2': 'КАЛИ',
            name: 'Калининград',
            region: 'South',
            x: 0,
            y: 10,
            value: 1
        },{
            'hc-a2': 'ПСК',
            name: 'Псков',
            region: 'South',
            x: 2,
            y: 9,
            value: 3
        },{
            'hc-a2': 'КАЛУ',
            name: 'Калуга',
            region: 'South',
            x: 2,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'БРЯ',
            name: 'Брянск',
            region: 'South',
            x: 2,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'ЛЕН',
            name: 'Ленинградская',
            region: 'South',
            x: 2,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'ТВЕР',
            name: 'Тверь',
            region: 'South',
            x: 3,
            y: 9,
            value: 4
        },{
            'hc-a2': 'НОВ',
            name: 'Новгород',
            region: 'South',
            x: 3,
            y: 10,
            value: 4
        },{
            'hc-a2': 'КАР',
            name: 'Карелия',
            region: 'South',
            x: 3,
            y: 11,
            value: 4
        },{
            'hc-a2': 'СПБ',
            name: 'Санкт-Питербугр',
            region: 'South',
            x: 2,
            y: 11,
            value: 4849377
        },{
            'hc-a2': 'МУР',
            name: 'Мурманск',
            region: 'South',
            x: 3,
            y: 12,
            value: 4849377
        }, {
                'hc-a2': 'СМОЛ',
                name: 'Смоленск',
                region: 'South',
                x: 1,
                y: 9,
                value: 4849377
        },{
            'hc-a2': 'МО',
            name: 'Московская',
            region: 'South',
            x: 3,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'ОРЛ',
            name: 'Орел',
            region: 'South',
            x: 3,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'КУРСК',
            name: 'Курск',
            region: 'South',
            x: 3,
            y: 6,
            value: 4849377
        },{
            'hc-a2': 'АДЫГ',
            name: 'Адыгея',
            region: 'South',
            x: 3,
            y: 4,
            value: 4849377
        },{
            'hc-a2': 'КРЫМ',
            name: 'Крым',
            region: 'South',
            x: 2,
            y: 4,
            value: 4849377
        },{
            'hc-a2': 'СЕВ',
            name: 'Севастополь',
            region: 'South',
            x: 2,
            y: 3,
            value: 4849377
        },{
            'hc-a2': 'ВОЛОГ',
            name: 'Волгда',
            region: 'South',
            x: 4,
            y: 10,
            value: 6
        },{
            'hc-a2': 'ЯРО',
            name: 'Ярославль',
            region: 'South',
            x: 4,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'МСК',
            name: 'Москва',
            region: 'South',
            x: 4,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'ТУЛ',
            name: 'Тула',
            region: 'South',
            x: 4,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'ЛИП',
            name: 'ЛИповская',
            region: 'South',
            x: 4,
            y: 6,
            value: 4849377
        },{
            'hc-a2': 'БЕЛ',
            name: 'Белгород',
            region: 'South',
            x: 4,
            y: 5,
            value: 4849377
        },{
            'hc-a2': 'КРД',
            name: 'КРД',
            region: 'South',
            x: 4,
            y: 4,
            value: 4849377
        },{
            'hc-a2': 'КРЧ',
            name: 'КРЧ',
            region: 'South',
            x: 4,
            y: 3,
            value: 4849377
        },{
            'hc-a2': 'КБР',
            name: 'КБР',
            region: 'South',
            x: 4,
            y: 2,
            value: 4849377
        },{
            'hc-a2': 'ИВАН',
            name: 'Ивановская',
            region: 'South',
            x: 5,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'ВЛАД',
            name: 'Владимир',
            region: 'South',
            x: 5,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'РЯЗ',
            name: 'Рязань',
            region: 'South',
            x: 5,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'ТАМБ',
            name: 'Тамбов',
            region: 'South',
            x: 5,
            y: 7,
            value: 7
        },{
            'hc-a2': 'ВРНЖ',
            name: 'Воронеж',
            region: 'South',
            x: 5,
            y: 6,
            value: 4849377
        },{
            'hc-a2': 'РОСТ',
            name: 'Ростов',
            region: 'South',
            x: 5,
            y: 5,
            value: 4849377
        },{
            'hc-a2': 'СТАВ',
            name: 'Ставрополь',
            region: 'South',
            x: 5,
            y: 4,
            value: 4849377
        },{
            'hc-a2': 'ОСЕТ',
            name: 'Осетия',
            region: 'South',
            x: 5,
            y: 3,
            value: 4849377
        },{
            'hc-a2': 'КОСТР',
            name: 'Кострома',
            region: 'South',
            x: 6,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'НИЖ',
            name: 'Нижний Новгород',
            region: 'South',
            x: 6,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'МОРД',
            name: 'Мордовия',
            region: 'South',
            x: 6,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'ПЕНЗ',
            name: 'Пенза',
            region: 'South',
            x: 6,
            y: 6,
            value: 4849377
        },{
            'hc-a2': 'ВОЛГ',
            name: 'Волгоград',
            region: 'South',
            x: 6,
            y: 5,
            value: 9
        },{
            'hc-a2': 'КАЛМ',
            name: 'Калмыкия',
            region: 'South',
            x: 6,
            y: 4,
            value: 4849377
        },{
            'hc-a2': 'ЧЕЧ',
            name: 'Чечня',
            region: 'South',
            x: 6,
            y: 3,
            value: 4849377
        },{
            'hc-a2': 'ИНГ',
            name: 'Ингушетия',
            region: 'South',
            x: 6,
            y: 2,
            value: 7
        },{
            'hc-a2': 'МАРИ',
            name: 'Мари эл',
            region: 'South',
            x: 7,
            y: 10,
            value: 10290000000021
        },{
            'hc-a2': 'ЧУВ',
            name: 'Чуваши',
            region: 'South',
            x: 7,
            y: 9,
            value: 102900000002
        },{
            'hc-a2': 'УЛЬ',
            name: 'Ульяновск',
            region: 'South',
            x: 7,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'САРАТ',
            name: 'Саратов',
            region: 'South',
            x: 7,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'АСТР',
            name: 'Астрахань',
            region: 'South',
            x: 7,
            y: 5,
            value: 102900000001
        },{
            'hc-a2': 'ДАГ',
            name: 'Дагестан',
            region: 'South',
            x: 7,
            y: 4,
            value: 4849377
        },{
            'hc-a2': 'АРХ',
            name: 'Архангельская',
            region: 'South',
            x: 8,
            y: 10,
            value: 102900000002
        },{
            'hc-a2': 'КИР',
            name: 'Кировская',
            region: 'South',
            x: 8,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'ТАТ',
            name: 'Татарстан',
            region: 'South',
            x: 8,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'САМ',
            name: 'Самара',
            region: 'South',
            x: 8,
            y: 7,
            value: 10
        },{
            'hc-a2': 'ОРЕН',
            name: 'Оренбург',
            region: 'South',
            x: 8,
            y: 6,
            value: 11
        },{
            'hc-a2': 'НЕН',
            name: 'НЕН',
            region: 'South',
            x: 9,
            y: 11,
            value: 4849377
        },{
            'hc-a2': 'КОМИ',
            name: 'Коми',
            region: 'South',
            x: 9,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'ПЕРМ',
            name: 'Пермь',
            region: 'South',
            x: 9,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'УДМ',
            name: 'Удмуртия',
            region: 'South',
            x: 9,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'БАШ',
            name: 'Баш',
            region: 'South',
            x: 9,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'ЯНАО',
            name: 'ЯНАО',
            region: 'South',
            x: 10,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'ХМАО',
            name: 'ХМАО',
            region: 'South',
            x: 10,
            y: 9,
            value: 12
        },{
            'hc-a2': 'СВЕР',
            name: 'Свер',
            region: 'South',
            x: 10,
            y: 8,
            value: 13
        },{
            'hc-a2': 'ЧЕЛ',
            name: 'Челябинск',
            region: 'South',
            x: 10,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'ТЮМ',
            name: 'Тюмень',
            region: 'South',
            x: 11,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'КУРГ',
            name: 'Курганская',
            region: 'South',
            x: 11,
            y: 9,
            value: 14
        },{
            'hc-a2': 'ОМСК',
            name: 'ОМСК',
            region: 'South',
            x: 11,
            y: 8,
            value: 15
        },{
            'hc-a2': 'ТОМС',
            name: 'Томск',
            region: 'South',
            x: 12,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'НОВО',
            name: 'Новосибирск',
            region: 'South',
            x: 12,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'АЛТ.К',
            name: 'АЛТ.К',
            region: 'South',
            x: 12,
            y: 7,
            value: 15
        },{
            'hc-a2': 'Р.АЛТ',
            name: 'Р.АЛТ',
            region: 'South',
            x: 12,
            y: 6,
            value: 102900000005
        },{
            'hc-a2': 'КРАС',
            name: 'Красноярск',
            region: 'South',
            x: 13,
            y: 10,
            value: 102900000006
        },{
            'hc-a2': 'КЕМ',
            name: 'Кемерово',
            region: 'South',
            x: 13,
            y: 9,
            value: 2
        },{
            'hc-a2': 'ХАК',
            name: 'ХАК',
            region: 'South',
            x: 13,
            y: 8,
            value: 1
        },{
            'hc-a2': 'ТЫВА',
            name: 'ТЫВА',
            region: 'South',
            x: 13,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'ИРК',
            name: 'Иркутск',
            region: 'South',
            x: 14,
            y: 9,
            value: 3
        },{
            'hc-a2': 'БУР',
            name: 'Бурятия',
            region: 'South',
            x: 14,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'ЗАБ',
            name: 'Забайкальский',
            region: 'South',
            x: 14,
            y: 7,
            value: 6
        },{
            'hc-a2': 'ЯКУТ',
            name: 'Якутия',
            region: 'South',
            x: 15,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'АМУР',
            name: 'Амурская',
            region: 'South',
            x: 15,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'ЕВР',
            name: 'ЕВР',
            region: 'South',
            x: 15,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'ЧУК',
            name: 'Чукотская',
            region: 'South',
            x: 16,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'МАГ',
            name: 'Магнитагорск',
            region: 'South',
            x: 16,
            y: 9,
            value: 4849377
        },{
            'hc-a2': 'ХАБ',
            name: 'Хабаровск',
            region: 'South',
            x: 16,
            y: 8,
            value: 4849377
        },{
            'hc-a2': 'ПРИМ',
            name: 'Приморский',
            region: 'South',
            x: 16,
            y: 7,
            value: 4849377
        },{
            'hc-a2': 'КАМЧ',
            name: 'Камчатка',
            region: 'South',
            x: 17,
            y: 10,
            value: 4849377
        },{
            'hc-a2': 'СЛХН',
            name: 'Сахалин',
            region: 'South',
            x: 17,
            y: 7,
            value: 102900000000
        },]
    }]
});