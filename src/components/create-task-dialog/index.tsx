import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import styles from "./createTaskDialog.module.scss";

export function CreateTaskDialog() {
  return (
    <div className={styles.container}>
    <Dialog.Content className={styles.content}>
      <Dialog.Title>Nova tarefa</Dialog.Title>

      <Flex direction="column" gap="3">
        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Título
          </Text>
          <TextField.Root
            placeholder="Digite"
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancelar
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button>Adicionar</Button>
        </Dialog.Close>
      </Flex>
  </Dialog.Content>
  </div>
  );
}