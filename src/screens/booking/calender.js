import moment from 'moment';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Calendar from "../../patch/react-native-calendar-range-picker";
import { COLORS, FONTS, normalize } from '../../utils';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export const Calender = ({
    selectedStartDate,
    setselectedStartDate,
    selectedEndDate,
    setSelectedEndDate
}) => {


    const CUSTOM_LOCALE = {
        monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
        dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        today: '',
        // year: '', // letter behind year number -> 2020{year}
    }
    return (
        <View style={styles.backColor}>
            <Calendar
                // pastYearRange={0}
                // futureYearRange={1}
                style={{
                    container: {
                        height: 370,
                        backgroundColor: '#FAFAFA',
                    },
                    monthContainer: styles.backColor,
                    weekContainer: styles.backColor,
                    monthNameText: {
                        color: COLORS.BLACK,
                        fontSize: normalize(20),
                        fontFamily: FONTS.REGULAR

                    },
                    dayNameText: styles.font,
                    dayText: styles.font,
                    holidayColor: '#000',
                    todayColor: COLORS.PRIMARY,
                    selectedDayBackgroundColor: COLORS.PRIMARY,
                    selectedBetweenDayBackgroundTextColor: '#c8e9de',
                }}
                isMonthFirst
                // initialNumToRender={0}
                disabledBeforeToday
                locale={CUSTOM_LOCALE}
                onChange={({ startDate, endDate }) => {
                    console.log(startDate, endDate)
                    setselectedStartDate(String(startDate));
                    setSelectedEndDate(String(endDate));
                }}
            />

            <View style={styles.dateSelectedContainer}>

                <View style={styles.checkContainer}>
                    <Text style={styles.checkTxt}>Check In</Text>
                    <Text style={styles.dateTxt}>
                        {
                            selectedStartDate == 'null' ? '--/--':
                                moment(selectedStartDate, "YYYY-MM-DD").format('MMM DD')}
                    </Text>
                </View>

                <AntDesign
                    name='right'
                    size={16}
                    color={COLORS.DARK + 60} />

                <View style={styles.checkContainer}>
                    <Text style={styles.checkTxt}>Check Out</Text>
                    <Text style={styles.dateTxt}>
                        {selectedEndDate == 'null' ? '--/--' :
                            moment(selectedEndDate, "YYYY-MM-DD").format('MMM DD')}
                    </Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    backColor: {
        backgroundColor: '#FAFAFA'
    },
    font: {
        fontFamily: FONTS.REGULAR
    },
    dateSelectedContainer:
    {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    checkContainer:
    {
        justifyContent: 'center',
        alignItems: 'center'
    },

    checkTxt: {
        fontSize: normalize(18),
        color: COLORS.DARK + 60,
    },
    dateTxt: {
        fontSize: normalize(24),
        fontWeight: '600',
        color: COLORS.DARK,
    }
})
export default Calender
