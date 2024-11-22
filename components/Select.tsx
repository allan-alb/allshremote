import { StyleSheet, View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "./Icon";
import { tokens } from "../constants/tokens";

type SelectOption = {
  label: string;
  value: any;
  materialCommunityIcon?: (typeof Icon.MaterialCommunityIcon)["name"];
  featherIcon?: (typeof Icon.FeatherIcon)["name"];
  ionIcon?: (typeof Icon.Ionicon)["name"];
  materialIcon?: (typeof Icon.MaterialIcon)["name"];
};

export type SelectProps = {
  options: SelectOption[];
  search?: boolean;
  onSelect: (selectedItem: any, index?: number) => void;
};

export function Select({ search, options, onSelect }: SelectProps) {
  const getIconFromIconSet = (item: SelectOption) => {
    if (!item) return;

    if (item.materialCommunityIcon) {
      return (
        <Icon.MaterialCommunityIcon
          // @ts-ignore-next-line
          name={item.materialCommunityIcon}
          color={tokens.colors.black}
          style={styles.dropdownItemIconStyle}
        />
      );
    }

    if (item.ionIcon) {
      return (
        <Icon.Ionicon
          // @ts-ignore-next-line
          name={item.ionIcon}
          color={tokens.colors.black}
          style={styles.dropdownItemIconStyle}
        />
      );
    }

    if (item.materialIcon) {
      return (
        <Icon.MaterialIcon
          // @ts-ignore-next-line
          name={item.materialIcon}
          color={tokens.colors.black}
          style={styles.dropdownItemIconStyle}
        />
      );
    }

    if (item.featherIcon) {
      return (
        <Icon.FeatherIcon
          // @ts-ignore-next-line
          name={item.featherIcon}
          color={tokens.colors.black}
          style={styles.dropdownItemIconStyle}
        />
      );
    }

    return null;
  };

  return (
    <SelectDropdown
      onSelect={(entry, index) => onSelect(entry.value, index)}
      search={search}
      data={options}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            {selectedItem && selectedItem.icon}
            {getIconFromIconSet(selectedItem)}
            <Text>{(selectedItem && selectedItem.label) || "Select"}</Text>
            <Icon.MaterialCommunityIcon
              name={isOpened ? "chevron-up" : "chevron-down"}
              style={styles.dropdownArrowStyle}
              size={28}
            />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            {getIconFromIconSet(item)}
            <Text>{item.label}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    minWidth: 200,
    height: 40,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownArrowStyle: {
    marginLeft: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
