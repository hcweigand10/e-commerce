const helpers = {
    toSentenceCase: (string: string) => {
        return string.replaceAll("-", " ").split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
    },
    toSnakeCase: (string: string) => {
        return string.toLowerCase().replaceAll(" ", "-")
    }
}

export default helpers