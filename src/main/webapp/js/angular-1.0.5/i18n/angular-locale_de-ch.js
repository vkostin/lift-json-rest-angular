angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    $provide.value("$locale", {"DATETIME_FORMATS": {"MONTH": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], "SHORTMONTH": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], "DAY": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], "SHORTDAY": ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], "AMPMS": ["vorm.", "nachm."], "medium": "dd.MM.yyyy HH:mm:ss", "short": "dd.MM.yy HH:mm", "fullDate": "EEEE, d. MMMM y", "longDate": "d. MMMM y", "mediumDate": "dd.MM.yyyy", "shortDate": "dd.MM.yy", "mediumTime": "HH:mm:ss", "shortTime": "HH:mm"}, "NUMBER_FORMATS": {"DECIMAL_SEP": ".", "GROUP_SEP": "'", "PATTERNS": [
        {"minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3},
        {"minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "\u00A4 ", "posSuf": "", "negPre": "\u00A4-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 2}
    ], "CURRENCY_SYM": "Fr."}, "pluralCat": function (n) {
        if (n == 1) {
            return PLURAL_CATEGORY.ONE;
        }
        return PLURAL_CATEGORY.OTHER;
    }, "id": "de-ch"});
}]);