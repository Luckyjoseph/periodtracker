import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Accordion } from './components/Accordion'
import { HelpCard } from './components/HelpCard'
import { CategoryPicker } from './components/CategoryPicker'
import { ScreenComponent } from '../../navigation/RootNavigator'
import { useEncyclopedia } from './EncyclopediaContext'
import { SearchBar } from '../../components/SearchBar'
import { globalStyles } from '../../config/theme'
import { Screen } from '../../components/Screen'

const EncyclopediaScreen: ScreenComponent<'Encyclopedia'> = ({ navigation }) => {
  const { query, setQuery } = useEncyclopedia()
  const goToHelpScreen = () => navigation.navigate('Help')

  return (
    <Screen>
      <HelpCard onPress={goToHelpScreen} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar query={query} setQuery={setQuery} style={globalStyles.shadow} />
        <CategoryPicker />
        <Accordion />
        <View style={styles.spacer} />
      </ScrollView>
    </Screen>
  )
}

export default EncyclopediaScreen

const styles = StyleSheet.create({
  scrollView: {
    padding: 12,
    height: '100%',
  },
  container: {
    alignItems: 'center',
  },
  spacer: {
    height: 200,
  },
})