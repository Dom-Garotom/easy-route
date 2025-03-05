import ListTitle from '@/components/atoms/ListTitle'
import ShortButton from '@/components/atoms/ShortButton/indext'
import StudantListItem from '@/components/atoms/studantListItem'
import { ApistudentListMocks } from '@/mocks/studantsListIem'
import colors from '@/styles/colors'
import { IconArrowLeft } from '@tabler/icons-react-native'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function StudentsList() {
  const api = false;

  return (
    <View style={s.studentsList_container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
        <ShortButton path={'/(driver)/driver'}
          left={0}
        >
          <IconArrowLeft color={colors.white} />
        </ShortButton>
        <Text style={s.studentsList_title}>Lista de alunos</Text>
      </View>


      {api ?
        <ListTitle title='Lista de alunos que vão' studentsNumber={33} />
        :
        <ListTitle title='Lista de alunos que voltam' studentsNumber={20} />
      }
      <FlatList
        data={ApistudentListMocks}
        renderItem={({ item }) =>
          <StudantListItem
            istitute={item.istitute}
            name={item.name}
            onTheBus={item.onTheBus}
            studant_Id={item.studant_Id}
          />
        }
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const s = StyleSheet.create({
  studentsList_title: {
    color: colors.title,
    fontWeight: '600',
    fontSize: 24,
  },
  studentsList_container: {
    flex: 1,
    padding: 20,
    paddingBottom: 10,
  },

  studentsListItem_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
  },

  studentsListItem_name: {
    color: colors.title,
    fontWeight: '600',
    fontSize: 14,
  },

  studentsListItem_institute: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 12,
  },
})
