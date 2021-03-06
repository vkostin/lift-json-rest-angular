angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    $provide.value("$locale", {"DATETIME_FORMATS": {"MONTH": ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"], "SHORTMONTH": ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], "DAY": ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"], "SHORTDAY": ["P", "E", "T", "K", "N", "R", "L"], "AMPMS": ["enne keskpäeva", "pärast keskpäeva"], "medium": "dd.MM.yyyy H:mm.ss", "short": "dd.MM.yy H:mm", "fullDate": "EEEE, d. MMMM y", "longDate": "d. MMMM y", "mediumDate": "dd.MM.yyyy", "shortDate": "dd.MM.yy", "mediumTime": "H:mm.ss", "shortTime": "H:mm"}, "NUMBER_FORMATS": {"DECIMAL_SEP": ",", "GROUP_SEP": " ", "PATTERNS": [
        {"minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3},
        {"minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "", "posSuf": " \u00A4", "negPre": "-", "negSuf": " \u00A4", "gSize": 3, "lgSize": 3, "maxFrac": 2}
    ], "CURRENCY_SYM": "€"}, "pluralCat": function (n) {
        if (n == 1) {
            return PLURAL_CATEGORY.ONE;
        }
        return PLURAL_CATEGORY.OTHER;
    }, "id": "et"});
}]);