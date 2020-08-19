import React from "react";
import theme from "theme";
import { Theme, Image, Button, Text, Box } from "@quarkly/widgets";
import { StackItem, Override, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section background="linear-gradient(348deg,#3388e9 37%,#5191f8 100%)">
			<Components.EmbedHTML quarkly-title="fonts" />
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Image width="80px" height="34px" src="https://ukit.com/img/mainpage/newmainpage/locfree/header/ukit-logo.svg" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Button
						font="400 16px/16px --fontFamily-sansTrebuchet"
						background="rgba(0, 119, 204, 0)"
						margin="0px 0px 0px 36px"
						padding="8px 3px 8px 3px"
						transition="cubic-bezier(0.23, 1, 0.32, 1)"
					>
						Почему мы?
					</Button>
					<Button
						font="400 16px/16px --fontFamily-sansTrebuchet"
						background="rgba(0, 119, 204, 0)"
						margin="0px 0px 0px 36px"
						padding="8px 3px 8px 3px"
						transition="cubic-bezier(0.23, 1, 0.32, 1)"
					>
						Цены
					</Button>
					<Image width="16px" height="16зч" src="https://ukit.com/img/mainpage/newmainpage/locfree/header/language.svg" margin="2px 0px 0px 36px" />
					<Button
						font="400 16px/16px --fontFamily-sansTrebuchet"
						background="rgba(0, 119, 204, 0)"
						margin="0px 0px 0px 36px"
						padding="8px 3px 8px 3px"
						transition="0.5s,cubic-bezier(0.23, 1, 0.32, 1)"
					>
						Войти
					</Button>
					<Button
						font="400 16px/16px --fontFamily-sansTrebuchet"
						background="rgba(0, 119, 204, 0)"
						margin="0px 0px 0px 36px"
						padding="8px 25px 8px 25px"
						transition="0.5s,cubic-bezier(0.23, 1, 0.32, 1)"
						border-radius="100px"
						border-width="2px"
						border-style="solid"
						border-color="#ffffff"
					>
						Создать сайт
					</Button>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="0px -16px -16px -16px">
				{"    "}
				<StackItem width="40%" display="flex" margin="136px 0px 0px 0px">
					<Override slot="StackItemContent" margin="0px 0px 0px 0px" />
					<Text font="700 50px/65px --fontFamily-sansTrebuchet" color="#ffffff" margin="16px 0px 24px 0px" as="h1">
						Конструктор сайтов для бизнеса
					</Text>
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="60%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Box
						background="rgba(0, 0, 0, 0) url(https://ukit.com/img/mainpage/newmainpage/unsorted/video/full@2x.jpg) 0% 0% /contain no-repeat scroll padding-box"
						width="100%"
						padding="0px 0px 59% 0px"
						margin="30px 0px 0px 0px"
						border-radius="8px"
					/>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});