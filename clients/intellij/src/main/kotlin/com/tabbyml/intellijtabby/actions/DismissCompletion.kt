package com.tabbyml.intellijtabby.actions

import com.intellij.openapi.actionSystem.ActionUpdateThread
import com.intellij.openapi.actionSystem.AnAction
import com.intellij.openapi.actionSystem.AnActionEvent
import com.intellij.openapi.actionSystem.CommonDataKeys
import com.intellij.openapi.components.service
import com.tabbyml.intellijtabby.editor.InlineCompletionService


class DismissCompletion : AnAction() {
  override fun actionPerformed(e: AnActionEvent) {
    val inlineCompletionService = service<InlineCompletionService>()
    inlineCompletionService.dismiss()
  }

  override fun update(e: AnActionEvent) {
    val inlineCompletionService = service<InlineCompletionService>()
    e.presentation.isEnabled = e.getData(CommonDataKeys.EDITOR) != null
        && e.project != null
        && inlineCompletionService.currentText != null
  }

  override fun getActionUpdateThread(): ActionUpdateThread {
    return ActionUpdateThread.EDT
  }
}