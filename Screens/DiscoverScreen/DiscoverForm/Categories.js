import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import colors from '../../../Constants/colors';
import fonts from '../../../Constants/fonts';

const genres = [{
  name: 'Genres',
  id: 0,
  children: [ 
    { name: 'Action', id: 28 },
    { name: 'Adventure', id: 12 },
    { name: 'Animation', id: 16 },
    { name: 'Comedy', id: 35 },
    { name: 'Crime', id: 80 },
    { name: 'Documentary', id: 99 },
    { name: 'Drama', id: 18 },
    { name: 'Family', id: 10751 },
    { name: 'Fantasy', id: 14 },
    { name: 'History', id: 36 },
    { name: 'Horror', id: 27 },
    { name: 'Music', id: 10402 },
    { name: 'Mystery', id: 9648 },
    { name: 'Romance', id: 10749 },
    { name: 'Science Fiction', id: 878 },
    { name: 'TV Movie', id: 10770 },
    { name: 'Thriller', id: 53 },
    { name: 'War', id: 10752 },
    { name: 'Western', id: 37 } 
  ]
}];

const languages = [{
  name: 'Languages',
  id: 0,
  children: [ 
    { id: 'aa', name: 'Afar' },
    { id: 'af', name: 'Afrikaans' },
    { id: 'ak', name: 'Akan' },
    { id: 'an', name: 'Aragonese' },
    { id: 'as', name: 'Assamese' },
    { id: 'av', name: 'Avaric' },
    { id: 'ae', name: 'Avestan' },
    { id: 'ay', name: 'Aymara' },
    { id: 'az', name: 'Azerbaijani' },
    { id: 'ba', name: 'Bashkir' },
    { id: 'bm', name: 'Bambara' },
    { id: 'bi', name: 'Bislama' },
    { id: 'bo', name: 'Tibetan' },
    { id: 'br', name: 'Breton' },
    { id: 'ca', name: 'Catalan' },
    { id: 'cs', name: 'Czech' },
    { id: 'ce', name: 'Chechen' },
    { id: 'cu', name: 'Slavic' },
    { id: 'cv', name: 'Chuvash' },
    { id: 'kw', name: 'Cornish' },
    { id: 'co', name: 'Corsican' },
    { id: 'cr', name: 'Cree' },
    { id: 'cy', name: 'Welsh' },
    { id: 'da', name: 'Danish' },
    { id: 'de', name: 'German' },
    { id: 'dv', name: 'Divehi' },
    { id: 'dz', name: 'Dzongkha' },
    { id: 'eo', name: 'Esperanto' },
    { id: 'et', name: 'Estonian' },
    { id: 'eu', name: 'Basque' },
    { id: 'fo', name: 'Faroese' },
    { id: 'fj', name: 'Fijian' },
    { id: 'fi', name: 'Finnish' },
    { id: 'fr', name: 'French' },
    { id: 'fy', name: 'Frisian' },
    { id: 'ff', name: 'Fulah' },
    { id: 'gd', name: 'Gaelic' },
    { id: 'ga', name: 'Irish' },
    { id: 'gl', name: 'Galician' },
    { id: 'gv', name: 'Manx' },
    { id: 'gn', name: 'Guarani' },
    { id: 'gu', name: 'Gujarati' },
    { id: 'ht', name: 'Haitian; Haitian Creole' },
    { id: 'ha', name: 'Hausa' },
    { id: 'sh', name: 'Serbo-Croatian' },
    { id: 'hz', name: 'Herero' },
    { id: 'ho', name: 'Hiri Motu' },
    { id: 'hr', name: 'Croatian' },
    { id: 'hu', name: 'Hungarian' },
    { id: 'ig', name: 'Igbo' },
    { id: 'io', name: 'Ido' },
    { id: 'ii', name: 'Yi' },
    { id: 'iu', name: 'Inuktitut' },
    { id: 'ie', name: 'Interlingue' },
    { id: 'ia', name: 'Interlingua' },
    { id: 'id', name: 'Indonesian' },
    { id: 'ik', name: 'Inupiaq' },
    { id: 'is', name: 'Icelandic' },
    { id: 'it', name: 'Italian' },
    { id: 'jv', name: 'Javanese' },
    { id: 'ja', name: 'Japanese' },
    { id: 'kl', name: 'Kalaallisut' },
    { id: 'kn', name: 'Kannada' },
    { id: 'ks', name: 'Kashmiri' },
    { id: 'kr', name: 'Kanuri' },
    { id: 'kk', name: 'Kazakh' },
    { id: 'km', name: 'Khmer' },
    { id: 'ki', name: 'Kikuyu' },
    { id: 'rw', name: 'Kinyarwanda' },
    { id: 'ky', name: 'Kirghiz' },
    { id: 'kv', name: 'Komi' },
    { id: 'kg', name: 'Kongo' },
    { id: 'ko', name: 'Korean' },
    { id: 'kj', name: 'Kuanyama' },
    { id: 'ku', name: 'Kurdish' },
    { id: 'lo', name: 'Lao' },
    { id: 'la', name: 'Latin' },
    { id: 'lv', name: 'Latvian' },
    { id: 'li', name: 'Limburgish' },
    { id: 'ln', name: 'Lingala' },
    { id: 'lt', name: 'Lithuanian' },
    { id: 'lb', name: 'Letzeburgesch' },
    { id: 'lu', name: 'Luba-Katanga' },
    { id: 'lg', name: 'Ganda' },
    { id: 'mh', name: 'Marshall' },
    { id: 'ml', name: 'Malayalam' },
    { id: 'mr', name: 'Marathi' },
    { id: 'mg', name: 'Malagasy' },
    { id: 'mt', name: 'Maltese' },
    { id: 'mo', name: 'Moldavian' },
    { id: 'mn', name: 'Mongolian' },
    { id: 'mi', name: 'Maori' },
    { id: 'ms', name: 'Malay' },
    { id: 'my', name: 'Burmese' },
    { id: 'na', name: 'Nauru' },
    { id: 'nv', name: 'Navajo' },
    { id: 'nr', name: 'Ndebele' },
    { id: 'nd', name: 'Ndebele' },
    { id: 'ng', name: 'Ndonga' },
    { id: 'ne', name: 'Nepali' },
    { id: 'nl', name: 'Dutch' },
    { id: 'nn', name: 'Norwegian Nynorsk' },
    { id: 'nb', name: 'Norwegian Bokmål' },
    { id: 'no', name: 'Norwegian' },
    { id: 'ny', name: 'Chichewa; Nyanja' },
    { id: 'oc', name: 'Occitan' },
    { id: 'oj', name: 'Ojibwa' },
    { id: 'or', name: 'Oriya' },
    { id: 'om', name: 'Oromo' },
    { id: 'os', name: 'Ossetian; Ossetic' },
    { id: 'pi', name: 'Pali' },
    { id: 'pl', name: 'Polish' },
    { id: 'pt', name: 'Portuguese' },
    { id: 'qu', name: 'Quechua' },
    { id: 'rm', name: 'Raeto-Romance' },
    { id: 'ro', name: 'Romanian' },
    { id: 'rn', name: 'Rundi' },
    { id: 'ru', name: 'Russian' },
    { id: 'sg', name: 'Sango' },
    { id: 'sa', name: 'Sanskrit' },
    { id: 'si', name: 'Sinhalese' },
    { id: 'sk', name: 'Slovak' },
    { id: 'sl', name: 'Slovenian' },
    { id: 'se', name: 'Northern Sami' },
    { id: 'sm', name: 'Samoan' },
    { id: 'sn', name: 'Shona' },
    { id: 'sd', name: 'Sindhi' },
    { id: 'so', name: 'Somali' },
    { id: 'st', name: 'Sotho' },
    { id: 'es', name: 'Spanish' },
    { id: 'sq', name: 'Albanian' },
    { id: 'sc', name: 'Sardinian' },
    { id: 'sr', name: 'Serbian' },
    { id: 'ss', name: 'Swati' },
    { id: 'su', name: 'Sundanese' },
    { id: 'sw', name: 'Swahili' },
    { id: 'sv', name: 'Swedish' },
    { id: 'ty', name: 'Tahitian' },
    { id: 'ta', name: 'Tamil' },
    { id: 'tt', name: 'Tatar' },
    { id: 'te', name: 'Telugu' },
    { id: 'tg', name: 'Tajik' },
    { id: 'tl', name: 'Tagalog' },
    { id: 'th', name: 'Thai' },
    { id: 'ti', name: 'Tigrinya' },
    { id: 'to', name: 'Tonga' },
    { id: 'tn', name: 'Tswana' },
    { id: 'ts', name: 'Tsonga' },
    { id: 'tk', name: 'Turkmen' },
    { id: 'tr', name: 'Turkish' },
    { id: 'tw', name: 'Twi' },
    { id: 'ug', name: 'Uighur' },
    { id: 'uk', name: 'Ukrainian' },
    { id: 'ur', name: 'Urdu' },
    { id: 'uz', name: 'Uzbek' },
    { id: 've', name: 'Venda' },
    { id: 'vi', name: 'Vietnamese' },
    { id: 'vo', name: 'Volapük' },
    { id: 'wa', name: 'Walloon' },
    { id: 'wo', name: 'Wolof' },
    { id: 'xh', name: 'Xhosa' },
    { id: 'yi', name: 'Yiddish' },
    { id: 'za', name: 'Zhuang' },
    { id: 'zu', name: 'Zulu' },
    { id: 'ab', name: 'Abkhazian' },
    { id: 'zh', name: 'Mandarin' },
    { id: 'ps', name: 'Pushto' },
    { id: 'am', name: 'Amharic' },
    { id: 'ar', name: 'Arabic' },
    { id: 'bg', name: 'Bulgarian' },
    { id: 'cn', name: 'Cantonese' },
    { id: 'mk', name: 'Macedonian' },
    { id: 'el', name: 'Greek' },
    { id: 'fa', name: 'Persian' },
    { id: 'he', name: 'Hebrew' },
    { id: 'hi', name: 'Hindi' },
    { id: 'hy', name: 'Armenian' },
    { id: 'en', name: 'English' },
    { id: 'ee', name: 'Ewe' },
    { id: 'ka', name: 'Georgian' },
    { id: 'pa', name: 'Punjabi' },
    { id: 'bn', name: 'Bengali' },
    { id: 'bs', name: 'Bosnian' },
    { id: 'ch', name: 'Chamorro' },
    { id: 'be', name: 'Belarusian' },
    { id: 'yo', name: 'Yoruba' } 
  ]
}];

const parseIDsToGenresString = IDs => {
  return IDs.map(ID => genres[0].children.find(
    genre => genre.id == ID
  ).name).join(', ');
};

const parseIDsToLanguagesString = IDs => {
  return IDs.map(ID => languages[0].children.find(
    language => language.id == ID
  ).name).join(', ');
};

class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.updateGenres = this.updateGenres.bind(this);
    this.updateLanguages = this.updateLanguages.bind(this);
    this.state = {
      genres: [],
      languages: []
    }
  }

  updateGenres(genres) {
    this.setState({ genres });
  };

  updateLanguages(languages) {
    this.setState({ languages });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>GENRES</Text>
          <SectionedMultiSelect
          items={genres}
          uniqueKey="id"
          subKey="children"
          selectText={
            this.state.genres.length == 0 ?
            "ALL GENRES" :
            parseIDsToGenresString(this.state.genres)
          }
          alwaysShowSelectText={true}
          showDropDowns={false}
          readOnlyHeadings={true}
          hideSearch={true}
          showChips={false}
          modalWithSafeAreaView={true}
          onSelectedItemsChange={this.updateGenres}
          selectedItems={this.state.genres}
          colors={sectionedMultiSelectColors}
          styles={
            this.state.genres.length == 0 ?
            sectionedMultiSelectStyles :
            [sectionedMultiSelectStyles, sectionedMultiSelectStyles__active]
          }
        />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>LANGUAGES</Text>
          <SectionedMultiSelect
          items={languages}
          uniqueKey="id"
          subKey="children"
          selectText={
            this.state.languages.length == 0 ?
            "ALL LANGUAGES" :
            parseIDsToLanguagesString(this.state.languages)
          }
          searchPlaceholderText="Search languages..."
          alwaysShowSelectText={true}
          showDropDowns={false}
          readOnlyHeadings={true}
          showChips={false}
          modalWithSafeAreaView={true}
          onSelectedItemsChange={this.updateLanguages}
          selectedItems={this.state.languages}
          colors={sectionedMultiSelectColors}
          styles={
            this.state.languages.length == 0 ?
            sectionedMultiSelectStyles :
            [sectionedMultiSelectStyles, sectionedMultiSelectStyles__active]
          }
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 20
  },
  inputContainer: {
    paddingBottom: 20
  },
  label: {
    color: colors.inputLabel, 
    fontSize: 18,
    marginBottom: 10
  }
});

const sectionedMultiSelectColors = {
  primary: colors.text,
  subItemBackground: colors.primary,
  searchSelectionColor: colors.text
}

const sectionedMultiSelectStyles = {
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.highlight
  },
  searchBar: {
    backgroundColor: colors.darkPrimary,
    paddingVertical: 10,
  },
  searchTextInput: {
    color: colors.text
  },
  scrollView: {
    padding: 15,
  },
  item: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingBottom: 15
  },
  itemText: {
    color: colors.text,
    fontWeight: '600',
    fontFamily: fonts.primary,
    fontSize: 34
  },
  subItem: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingBottom: 25,
    paddingTop: 0
  },
  subItemText: {
    color: colors.text,
    fontSize: 20
  },
  activeOpacity: {
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.highlight,
    paddingVertical: 15
  },  
  confirmText: {
    fontFamily: 'Helvetica Neue',
  },
  selectToggle: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16
  },
  selectToggleText: {
    color: colors.lightText,
  }
};

const sectionedMultiSelectStyles__active = {
  selectToggleText: {
    color: colors.text,
  }
};

export default Categories;