import React, { useMemo, useCallback } from "react";
import moment from "moment";
import { FlatList, View, ActivityIndicator } from "react-native";
import Month from "./Month";
import { getMonths } from "./utils/data";
var LAYOUT_HEIGHT = 370;
var CalendarList = function (_a) {
  var pastYearRange = _a.pastYearRange, futureYearRange = _a.futureYearRange, initialNumToRender = _a.initialNumToRender, locale = _a.locale, handlePress = _a.handlePress, startDate = _a.startDate, endDate = _a.endDate, flatListProps = _a.flatListProps, isMonthFirst = _a.isMonthFirst, disabledBeforeToday = _a.disabledBeforeToday, style = _a.style;
  var months = useMemo(function () { return getMonths(pastYearRange, futureYearRange); }, [pastYearRange, futureYearRange]);
  var getInitialIndex = useCallback(function () {
    return months.findIndex(function (month) {
      var targetDate = startDate ? moment(startDate) : moment();
      return month.id === targetDate.format("YYYY-MM");
    });
  }, []);
  var handleRenderItem = useCallback(function (_a) {
    var item = _a.item;
    return (<View style={{
      height: LAYOUT_HEIGHT,
      backgroundColor: "#FAFAFA",
    }}>
      <Month item={item} locale={locale} handlePress={handlePress} startDate={startDate} endDate={endDate} isMonthFirst={isMonthFirst} disabledBeforeToday={disabledBeforeToday} style={style} />
    </View>);
  }, [locale.today, startDate, endDate]);
  return (<View style={[{ position: "relative" }, style === null || style === void 0 ? void 0 : style.container]}>
    <View style={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <ActivityIndicator />
    </View>
    <FlatList keyExtractor={function (item) { return item.id; }} data={months} renderItem={handleRenderItem} getItemLayout={function (_, index) {
      return ({
        length: LAYOUT_HEIGHT,
        offset: LAYOUT_HEIGHT * index,
        index: index,
      });
    }} initialScrollIndex={getInitialIndex()} initialNumToRender={initialNumToRender} {...flatListProps}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>);
};
export default CalendarList;
//# sourceMappingURL=CalendarList.js.map